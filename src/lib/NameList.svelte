<script lang="ts">
  import { Names } from "../store/Names";
</script>

<div>
  {#each $Names as name}
    <p>{name}</p>
  {/each}
</div>
