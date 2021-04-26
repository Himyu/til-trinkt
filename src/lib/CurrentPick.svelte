<script lang="ts">
  import { Chronic } from "../store/Chronic";
  import { Card, CardBody, CardHeader } from "sveltestrap";
  import * as linesJson from "../assets/lines.json";

  const lines = linesJson.lines;

  function getRandomLine(_name) {
    return lines[Math.floor(Math.random() * lines.length)];
  }
  $: line = getRandomLine($Chronic[0]);
</script>

{#if $Chronic.length > 0}
  <Card color="dark" class="mb-3 text-center">
    <CardHeader>
      <p class="display-5">{line}</p>
    </CardHeader>
    <CardBody>
      <p class="display-2">{$Chronic[0]}</p>
    </CardBody>
  </Card>
{/if}
