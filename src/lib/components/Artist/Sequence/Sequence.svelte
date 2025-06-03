<script lang="ts">
  import type { Artist, ArtistSummary } from '$lib/api/types';
  import ArtworkSequenceItem from './SequenceItem.svelte';

  export let artist: Artist;
  export let children: ArtistSummary[];
  export let parents: ArtistSummary[];
</script>

{#if !artist}
  <div>No artist found</div>
{:else}
  <ol class="space-y-4">
    <ArtworkSequenceItem artist={null} type="parent" sequence={0} />
    {#each parents as work, i}
      <ArtworkSequenceItem artist={work} type="parent" sequence={i + 1} />
    {/each}
    <ArtworkSequenceItem artist={artist} type="self" sequence={parents.length + 1}/>
    {#each children as child, i}
      <ArtworkSequenceItem artist={child} type="child" sequence={i + parents.length + 2} />      
    {/each}
  </ol>
{/if}

<style>
</style>
