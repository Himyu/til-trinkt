<script lang="ts">
  import { Names } from "../store/Names";
  import {
    Button,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
  } from "sveltestrap";

  let value: string = "";

  function addName(e: Event) {
    e.preventDefault();

    if (!value) return;

    if ($Names.includes(value)) return;

    $Names = [...$Names, value];

    value = "";
  }
</script>

<div>
  <form on:submit={addName} class="p-4">
    <InputGroup class="mb-3">
      <Input type="text" bind:value placeholder="Name ..." required />
      <InputGroupAddon addonType="append">
        <InputGroupText class="addBtn">
          <Input addon type="submit" value="+" />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </form>
</div>

<style lang="scss" global>
  .addBtn {
    background-color: var(--success);
    border-color: var(--success);
    color: var(--white);
  }
</style>
