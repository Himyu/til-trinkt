<script lang="ts">
  import { Names, ShowNames } from "../store/Names";
  import { Card } from "sveltestrap";
</script>

<div>
  {#if $ShowNames}
    <h4>Mitspiler</h4>
    <div class="name-grid mb-4">
      {#each $Names as name}
        <Card class="card-c-bg py-1 px-2 mb-2">{name}</Card>
      {/each}
    </div>
  {/if}
</div>
