<script lang="ts">
  import Icon from "./Icon.svelte";
  import { ShowNames } from "../store/Names";
  import { faUsers } from "@fortawesome/free-solid-svg-icons";
</script>

<header class="bg-dark p-3 text-white">
  <div class="d-flex flex-row w-100">
    <h1 class="mr-auto">Til Trnkt</h1>
    <Icon
      class="test"
      size="25px"
      icon={faUsers}
      on:click={() => ($ShowNames = !$ShowNames)}
    />
  </div>
</header>

<style lang="scss">
  h1 {
    font-size: 1.25rem;
  }
</style>
