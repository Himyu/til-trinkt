<script lang="ts">
  import { Names } from "../store/Names";
  import { Chronic } from "../store/Chronic";
  import Icon from "./Icon.svelte";
  import { Button } from "sveltestrap";
  import { faRandom } from "@fortawesome/free-solid-svg-icons";
  import { Alert } from "../store/Alert";

  function getNext() {
    if (!$Names) return;
    const newName = $Names[Math.floor(Math.random() * $Names.length)];
    $Chronic = [newName, ...$Chronic];
  }

  function resetGame() {
    if (confirm("Das Spiel wirklich zurücksetzen?")) {
      $Names = [];
      $Chronic = [];
      $Alert = {
        show: true,
        color: "info",
        heading: "Spiel zurückgesetzt",
      };
    }
  }
</script>

{#if $Names.length > 1}
  <Button color="primary" block on:click={getNext} id="randomBtn">
    Rollen <Icon class="ml-2" icon={faRandom} />
  </Button>
  {#if $Chronic.length >= 1}
    <Button
      color="link"
      size="sm"
      outline
      block
      on:click={resetGame}
      class="text-light"
    >
      Spiel zurücksetzten
    </Button>
  {/if}
{/if}
