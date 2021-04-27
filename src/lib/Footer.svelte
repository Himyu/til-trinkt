<script lang="ts">
  import Icon from "./Icon.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faCopyright } from "@fortawesome/free-solid-svg-icons";
</script>

<footer class="p-4 text-center text-light mt-auto">
  <p class="mb-1">
    <small>
      Copyright 2021 <Icon icon={faCopyright} />
      <a href="https://github.com/Himyu" class="text-light">
        <u>Maximilian Bala</u>
      </a>
    </small>
  </p>
  <a href="https://github.com/Himyu/til-trinkt" class="text-light">
    <small>Das Projekt auf <Icon icon={faGithub} /> ansehen</small>
  </a>
</footer>

<style lang="scss">
  footer {
    background-color: rgba(#343a40, 0.15);
  }
</style>
