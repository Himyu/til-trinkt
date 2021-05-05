<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Alert from "./lib/Alert.svelte";
  import NameList from "./lib/NameList.svelte";
  import Input from "./lib/Input.svelte";
  import CurrentPick from "./lib/CurrentPick.svelte";
  import Generator from "./lib/Generator.svelte";
  import Chronic from "./lib/Chronic.svelte";
  import Footer from "./lib/Footer.svelte";
  import { Chronic as ChronicStore } from "./store/Chronic";
  import { ShowNames } from "./store/Names";
</script>

<svelte:head>
  <meta name="theme-color" content="#bc4e9c" />
</svelte:head>

<Alert />
<Header />
<main class="p-4 text-white flex-grow-1 d-flex flex-column h-100">
  <NameList />
  <div
    class={$ChronicStore.length < 2
      ? $ShowNames
        ? "flex mb-auto"
        : "flex my-auto"
      : ""}
  >
    <Input />
    <CurrentPick />
    <Generator />
  </div>
  <Chronic />
</main>
<Footer />
