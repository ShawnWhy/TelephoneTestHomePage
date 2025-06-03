<script>
  export let title = '';
</script>

<section class="my-8">
  <h2 class="text-2xl font-semibold mb-4">{title}</h2>
  <p class="leading-relaxed">
    <slot />
  </p>
</section>
