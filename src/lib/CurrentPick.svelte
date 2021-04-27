<script lang="ts">
  import { Chronic } from "../store/Chronic";
  import { Card, CardBody, CardHeader } from "sveltestrap";
  import * as linesJson from "../assets/lines.json";
  import { fade } from "svelte/transition";

  const lines = linesJson.lines;

  function getRandomLine(_name) {
    return lines[Math.floor(Math.random() * lines.length)];
  }
  $: line = getRandomLine($Chronic[0]);
</script>

{#if $Chronic.length > 0}
  <div class="mb-4" transition:fade>
    <Card class="card-c-bg text-center">
      <CardHeader>
        <h5 class="mb-0">{line}</h5>
      </CardHeader>
      <CardBody>
        <h2>{$Chronic[0]}</h2>
      </CardBody>
    </Card>
  </div>
{/if}
