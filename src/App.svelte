<script lang="ts">
  import Menu from "./lib/Menu.svelte";
  import NameList from "./lib/NameList.svelte";
  import Input from "./lib/Input.svelte";
  import CurrentPick from "./lib/CurrentPick.svelte";
  import Generator from "./lib/Generator.svelte";
  import Chronic from "./lib/Chronic.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Menu />
  <NameList />
  <Input />
  <CurrentPick />
  <Generator />
  <Chronic />
  <Footer />
</main>

<style lang="scss" global>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    background: #333;
  }
</style>
