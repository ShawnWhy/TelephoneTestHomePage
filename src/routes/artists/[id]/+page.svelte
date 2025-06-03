<script lang="ts">
  import { BASE_URL, fetchArtistById, fetchChildrenOfArtist, fetchParentsOfArtist } from '$lib/api';
  import type { Artist, ArtistSummary } from '$lib/api/types';
  import { onMount } from 'svelte';
  import ArtworkSequence from '$lib/components/Artist/Sequence/Sequence.svelte';
  import ArtistPageSection from '$lib/components/Artist/PageSection.svelte';
  import Submission from '$lib/components/Artist/Submission.svelte';
  import sanitize from '$lib/utils/sanitize-html.js';

  export let data;
  let artistId = data.id;
  let artist: Artist | null = null;
  let children: ArtistSummary[] = [];
  let parents: ArtistSummary[] = [];
  let loading = true;
  let error: string | null = null;

  onMount(async () => {
    try {
      artist = await fetchArtistById(parseInt(artistId));
      if (artist) {
        children = await fetchChildrenOfArtist(artist);
        parents = await fetchParentsOfArtist(artist);
      }
    } catch (e) {
      error = 'Failed to load artist.';
    } finally {
      loading = false;
    }
  });
</script>

<div class="min-h-screen bg-white flex flex-col">
  <div class="flex-1 flex flex-col px-4 pt-2 pb-8">
    {#if loading}
      <div class="text-center text-gray-500 mt-8">Loading...</div>
    {:else if error}
      <div class="text-center text-red-500 mt-8">{error}</div>
    {:else if artist}
      <!-- Artwork Media -->
      {#if artist && artist.submissions[0]}
        <div class="w-full flex justify-center mb-4">
          <Submission
            submission={artist.submissions[0]}
            altText={`${artist.first_name} ${artist.last_name}`}
          />
        </div>
      {/if}

      <!-- Artist Info -->
      <section>
        <div class="flex justify-between items-center">
          <div>
            <h1>{`${artist.first_name} ${artist.last_name}`}</h1>
            <div>{artist.city}</div>
            <div>{artist.art_form}</div>
          </div>
        </div>
      </section>

      <!-- About the Artist -->
      {#if artist.bio}
        <ArtistPageSection title="About the artist.">
          <p class="text-sm text-black leading-relaxed">{sanitize(artist.bio)}</p>
        </ArtistPageSection>
      {/if}
      <!-- Process Statement -->
      {#if artist.process_statement}
        <ArtistPageSection title="Process statement.">
          <p class="text-sm text-black leading-relaxed">{sanitize(artist.process_statement)}</p>
        </ArtistPageSection>
      {/if}

      <!-- Artist Location Photo -->
      {#if artist.location_picture_lg}
        <ArtistPageSection title="Location">
          <img
            src={BASE_URL + artist.location_picture_lg}
            alt={artist.city}
            class="object-cover max-h-64 w-full rounded"
          />
        </ArtistPageSection>
      {/if}

      <ArtistPageSection title="Sequence of art works">
        {#if artist}
          <ArtworkSequence {artist} {children} {parents} />
        {/if}
      </ArtistPageSection>
    {/if}
  </div>
</div>
