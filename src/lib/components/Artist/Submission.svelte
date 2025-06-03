<script lang="ts">
  import { BASE_URL } from '$lib/api';
  import type { Submission } from '$lib/api/types';
  import VimeoPlayer from '../VimeoPlayer.svelte';
  import sanitize from '$lib/utils/sanitize-html';
  
  export let submission: Submission;
  export let altText: string = '';

</script>

{#if submission.type === 'image'}
  <img
    src={BASE_URL + submission.image_lg}
    alt={altText}
    class={'object-cover max-h-64 w-[369px] rounded'}
  />
{:else if submission.type === 'video'}
  <div class="relative w-full">
    <VimeoPlayer url={submission.url} />
  </div>
{:else if submission.type === 'audio'}
  <div class="w-full">
    <audio
      controls
      class="w-full"
      src={BASE_URL + submission.url}
    >
      Your browser does not support the audio element.
    </audio>
  </div>
{:else if submission.type === 'written_work'}
  <div class="prose max-w-none">
    {@html sanitize(submission.written_work)}
  </div>
{/if} 