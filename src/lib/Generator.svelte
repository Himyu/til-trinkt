<script lang="ts">
  import { Names } from "../store/Names";
  import { Chronic } from "../store/Chronic";
  import Icon from "./Icon.svelte";
  import { Button } from "sveltestrap";
  import { faRandom } from "@fortawesome/free-solid-svg-icons";

  function getNext() {
    if (!$Names) return;
    const newName = $Names[Math.floor(Math.random() * $Names.length)];
    $Chronic = [newName, ...$Chronic];
  }
</script>

{#if $Names.length > 1}
  <Button color="primary" class="mb-3" block on:click={getNext} id="randomBtn">
    Next <Icon class="ml-2" icon={faRandom} />
  </Button>
{/if}
