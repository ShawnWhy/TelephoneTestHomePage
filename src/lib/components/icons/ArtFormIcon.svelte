<script lang="ts">
  import PhotographyIcon from './PhotographyIcon.svelte';
  import PaintingIcon from './PaintingIcon.svelte';
  import DrawingIcon from './DrawingIcon.svelte';
  import SculptureIcon from './SculptureIcon.svelte';
  import MusicIcon from './MusicIcon.svelte';
  import DanceIcon from './DanceIcon.svelte';
  import LitIcon from './LitIcon.svelte';
  import FilmIcon from './FilmIcon.svelte';
  import { artFormCodeToInternalRep, type ArtForm, type ArtFormCode } from '../../../models/art-form';
  export let outline: boolean = true;
  export let background: boolean = true;
  export let width: number = 24;
  export let height: number = 24;
  export let artForm: ArtFormCode;
  export let stroke: string = 'white';

  const artFormInternalRep = artFormCodeToInternalRep(artForm);
  
  const componentMap: Record<ArtForm, typeof PhotographyIcon> = {
    photography: PhotographyIcon,
    painting: PaintingIcon,
    sculpture: SculptureIcon,
    music: MusicIcon,
    literature: LitIcon,
    drawing: DrawingIcon,
    dance: DanceIcon,
    film: FilmIcon
  };

  const IconComponent = componentMap[artFormInternalRep];
</script>

{#if IconComponent}
  <svelte:component this={IconComponent} {width} {height} {outline} {background} {stroke} />
{/if}
