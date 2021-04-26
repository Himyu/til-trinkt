<script lang="ts">
  import { Names, ShowNames } from "../store/Names";
</script>

<div>
  {#if $ShowNames}
    {#each $Names as name}
      <p>{name}</p>
    {/each}
  {/if}
</div>
