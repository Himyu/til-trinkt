<script lang="ts">
  import { Alert as STAlert } from "sveltestrap";
  import { Alert } from "../store/Alert";
  import type { DisplayError } from "../../types/DisplayError";
  import { onDestroy } from "svelte";

  export let ms = 3000;
  let visible: boolean;
  let timeout: ReturnType<typeof setTimeout>;

  const onMessageChange = (alert: DisplayError, ms: number) => {
    clearTimeout(timeout);
    if (!alert.show) {
      visible = false;
    } else {
      visible = true;
      if (ms > 0) timeout = setTimeout(() => (visible = false), ms);
    }
  };
  $: onMessageChange($Alert, ms);
  onDestroy(() => clearTimeout(timeout));
</script>

<STAlert
  color={$Alert.color}
  isOpen={true}
  toggle={() => (visible = false)}
  class="floating-alert"
>
  <h4 class="alert-heading mb-1">{$Alert.heading}</h4>
  {$Alert.text || ""}
</STAlert>
