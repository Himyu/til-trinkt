<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let icon;
  let path = [];
  let classes = "";
  let viewBox = "";
  $: viewBox = "0 0 " + icon.icon[0] + " " + icon.icon[1];
  $: path = icon.icon[4];
  export let fill = "currentColor";
  export let size = "1em";
  export let title = "";
  $: classes = "fa" + " " + ($$props.class || "");
</script>

<i class={classes} {title} on:click>
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {viewBox}
  >
    <path {fill} d={path} />
  </svg>
</i>

<style global>
  i {
    display: inline-block;
    align-items: center;
    justify-content: center;
    height: 100%;
    line-height: 1.15;
  }
</style>
