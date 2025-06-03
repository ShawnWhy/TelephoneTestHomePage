<script lang="ts">
  export let color: string = 'currentColor';
  export let size: number = 24;
  
  $: width = size;
  $: height = size;
</script>

<svg
  {width}
  {height}
  viewBox="0 0 30.493559 15.952428"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Dashed horizontal shaft -->
  <path
    d="M 0,6 v 2 l 20.390486,-0.023786"
    fill="none"
    stroke={color}
    stroke-width="2"
    stroke-dasharray="4 4"
  />

  <!-- Solid arrowhead -->
  <path
    d="M 30.493558,8 20.48563,0 20.438058,6.0951437 20.390486,7.976214 20.414276,13.952428 Z"
    fill={color}
    stroke="none"
  />
</svg>
