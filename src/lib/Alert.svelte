<script lang="ts">
  import { Alert } from "sveltestrap";

  $: visible = true;
</script>

<Alert color="info" isOpen={visible} toggle={() => (visible = false)}>
  I am an alert and I can be dismissed!
</Alert>
