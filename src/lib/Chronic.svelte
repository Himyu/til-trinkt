<script lang="ts">
  import { Chronic } from "../store/Chronic";
  import { Card } from "sveltestrap";
  import { fly } from "svelte/transition";
</script>

{#if $Chronic.length > 1}
  <h5 class="mt-4 mb-2 text-center">Chronic:</h5>
  <div class="mb-2 d-flex flex-column-reverse">
    {#each $Chronic.slice(1).reverse() as name}
      <div class="mb-2" transition:fly={{ x: -200 }}>
        <Card class="align-items-center p-1 card-c-bg">
          <span class="text-white text-center">{name}</span>
        </Card>
      </div>
    {/each}
  </div>
{/if}
