<script lang="ts">
  import { Names } from "../store/Names";
  import { Button, Input } from "sveltestrap";

  let value: string = "";

  function addName(e: Event) {
    e.preventDefault();

    if (value != "") {
      Names.add(value);
    }
  }
</script>

<div>
  <form on:submit={addName} class="p-4">
    <Input type="text" {value} placeholder="Name ..." required class="mb-3" />
    <Button color="success" block>Hinzufügen</Button>
  </form>
</div>
