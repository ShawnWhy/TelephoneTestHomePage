<script lang="ts">
  import type { Artist, ArtistSummary } from '$lib/api/types';
  import { arabicToRoman } from '$lib/utils/arabic-to-roman';
  import ArrowRight from './ArrowRight.svelte';
  import ArtFormIcon from '$lib/components/icons/ArtFormIcon.svelte';
  import { artFormCodeToTitle } from '../../../../models/art-form';
  export let artist: Artist | ArtistSummary | null;
  export let type: 'parent' | 'self' | 'child';
  export let sequence: number;
</script>

{#if artist === null}
  <li class="sequence-line">
    <div class="square-with-line"></div>
  </li>
{:else}
  <li class={type === 'parent' || type === 'self' ? 'sequence-line' : 'sequence-line-child'}>
    {#if type === 'child'}
      <div class="mr-8">
        <ArrowRight size={24} color="#aaaaaa" />
      </div>
    {/if}
    <span class="icon"
      ><ArtFormIcon artForm={artist.art_form} /></span
    >
    <span class="sequence-item-container {type === 'self' ? 'current-artist' : ''}">
      <span>{arabicToRoman(sequence)}.</span>
      <a href={`/artists/${artist.id}`}>{artist.first_name} {artist.last_name}</a>
      <span>({artFormCodeToTitle(artist.art_form)}.)</span>
    </span>
  </li>
{/if}

<style>
  li.sequence-line {
    display: flex;
    align-items: center;
    border-left: 2px dashed var(--color-gray-1);
    padding-inline-start: 16px;
    margin: 0;
    margin-inline-start: 16px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .square-with-line {
    position: relative;
    width: 14px;
    height: 14px;
    background-color: var(--color-gray-1);
    margin-inline-start: -24px;
  }

  .square-with-line::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 10px;
    background-color: var(--color-gray-1);
  }

  .sequence-item-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    align-items: center;

    a {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  li.sequence-line-child {
    display: flex;
    position: relative;
    align-items: center;
    border-color: var(--color-gray-1);
    border-style: dashed;
    margin: 0;
    margin-inline-start: 16px;
  }

  .current-artist {
    font-weight: bold;
  }

  /* New class to stop the vertical line before the arrow */
  li.sequence-line-child:last-child {
    position: relative;
    padding-inline-start: 0;
    margin-inline-start: 16px;
  }

  li.sequence-line-child:last-child::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    border-left: 2px dashed var(--color-gray-1);
    height: 21px; /* short vertical line */
  }

  /* For the other children (if any), keep border line */
  li.sequence-line-child:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    border-left: 2px dashed var(--color-gray-1);
    height: 100%;
  }

  .icon {
    margin-inline-end: 8px;
    margin-inline-start: -29px;
    flex-shrink: 0;
  }
</style>
