<script>
  let { children } = $props();
  import '../app.css';
  import { slide } from 'svelte/transition';
  
  let isMenuOpen = $state(false);
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<!-- Header -->
<div class="flex items-center justify-between px-4 py-4 border-b border-black">
  <span class="font-serif font-bold text-lg tracking-widest">TELEPHONE</span>
  <button 
    aria-label="Menu" 
    class="focus:outline-none"
    onclick={toggleMenu}
  >
    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

<!-- Navigation Menu -->
{#if isMenuOpen}
  <div 
    class="fixed inset-0 bg-white z-50"
    transition:slide={{ duration: 300 }}
  >
    <div class="flex flex-col items-center justify-center h-full space-y-8">
      <button 
        class="absolute top-4 right-4 focus:outline-none"
        onclick={toggleMenu}
        aria-label="Close menu"
      >
        <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <a href="/" class="text-2xl font-bold font-serif hover:underline" onclick={toggleMenu}>Home</a>
      <a href="/artists/1" class="text-2xl font-bold font-serif hover:underline" onclick={toggleMenu}>Sample Artist Page</a>
      <a href="/about" class="text-2xl font-bold font-serif hover:underline" onclick={toggleMenu}>About</a>
      <a href="/game-map" class="text-2xl font-bold font-serif hover:underline" onclick={toggleMenu}>Game map</a>
      <a href="/world-map" class="text-2xl font-bold font-serif hover:underline" onclick={toggleMenu}>World map</a>
    </div>
  </div>
{/if}

<div class="px-4 py-4">
  {@render children()}
</div>
