<script lang="ts">
  import { Names } from "../store/Names";
  import Icon from "./Icon.svelte";
  import { Input, InputGroup, InputGroupAddon, Button } from "sveltestrap";
  import { faPlus } from "@fortawesome/free-solid-svg-icons";

  let value: string = "";

  function addName(e: Event) {
    e.preventDefault();

    if (!value) return;

    if ($Names.includes(value)) return;

    $Names = [...$Names, value];

    value = "";
  }
</script>

<h4 class="text-center mb-3">Gib einen Namen ein</h4>
<form on:submit={addName} class="mb-3">
  <InputGroup>
    <Input type="text" bind:value placeholder="Name ..." required />
    <InputGroupAddon addonType="append">
      <Button size="sm" color="success" id="addBtn" class="input-group-text">
        <Icon icon={faPlus} size="12px" />
      </Button>
    </InputGroupAddon>
  </InputGroup>
</form>
