<script lang="ts">
  import Icon from "./Icon.svelte";
  import { ShowNames, Names } from "../store/Names";
  import { faUsers, faTimes } from "@fortawesome/free-solid-svg-icons";

  function showNames() {
    if ($ShowNames) $ShowNames = false;
    else if (!$ShowNames && $Names.length > 0) {
      $ShowNames = true;
    }
  }
</script>

<header class="m-3 p-3 text-white">
  <div class="d-flex flex-row w-100">
    <h1 class="mr-auto mb-0">Til Trinkt</h1>
    <Icon
      class="test"
      size="25px"
      icon={$ShowNames ? faTimes : faUsers}
      on:click={showNames}
    />
  </div>
</header>

<style lang="scss">
  h1 {
    font-size: 1.25rem;
  }

  header {
    border: 2px solid #fff;
    border-radius: 10px;
  }
</style>
