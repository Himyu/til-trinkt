<script lang="ts">
  import { Names } from "../store/Names";
  import { Alert } from "../store/Alert";
  import Icon from "./Icon.svelte";
  import { Input, InputGroup, InputGroupAddon, Button } from "sveltestrap";
  import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

  let value: string = "";
  let succes = false;

  function addName(e: Event) {
    e.preventDefault();

    if (!value) return;

    if ($Names.includes(value)) {
      $Alert = {
        show: true,
        color: "danger",
        heading: `${value} ist schon dabei`,
      };
      return;
    }

    $Names = [...$Names, value];
    succes = true;

    setTimeout(() => {
      succes = false;
    }, 1500);

    $Alert = {
      show: true,
      color: "success",
      heading: `${value} hinzugefügt`,
    };

    value = "";
  }
</script>

<h4 class="text-center mb-3">Gib einen Namen ein</h4>
<form on:submit={addName} class="mb-4">
  <InputGroup>
    <Input
      type="text"
      bind:value
      placeholder="Name ..."
      required
      style={succes ? "border-color: var(--success)" : ""}
    />
    <InputGroupAddon addonType="append">
      <Button color={succes ? "success" : "light"} class="input-group-text">
        <Icon icon={succes ? faCheck : faPlus} size="12px" />
      </Button>
    </InputGroupAddon>
  </InputGroup>
</form>
