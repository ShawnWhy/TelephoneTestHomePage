<script lang="ts">
  import { onMount } from 'svelte';
  import Player from '@vimeo/player';

  export let url = '';
  export let autoplay = false;
  export let muted = false;
  export let loop = false;

  let playerContainer: HTMLDivElement;
  let player: Player;

  onMount(() => {
    if (url) {
      player = new Player(playerContainer, {
        url: url,
        autoplay: autoplay,
        muted: muted,
        loop: loop,
        responsive: true
      });

      // Cleanup on component destruction
      return () => {
        if (player) {
          player.destroy();
        }
      };
    }
  });

  // Expose player methods
  export function play(): void {
    player?.play();
  }

  export function pause(): void {
    player?.pause();
  }

  export function setVolume(volume: number): void {
    player?.setVolume(volume);
  }
</script>

<div class="relative w-full aspect-video" bind:this={playerContainer}></div>
