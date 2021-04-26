<script lang="ts">
  import { Chronic } from "../store/Chronic";
  import { Card } from "sveltestrap";
</script>

{#if $Chronic.length > 0}
  <h5 class="mt-5 mb-2">Chronic:</h5>
  {#each $Chronic.slice(1) as name}
    <Card color="dark" class="mb-2 align-items-center p-1">
      <span class="text-white text-center">{name}</span>
    </Card>
  {/each}
{/if}
