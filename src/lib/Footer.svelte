<script lang="ts">
  import Icon from "./Icon.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faCopyright } from "@fortawesome/free-solid-svg-icons";
</script>

<footer class="bg-dark p-4 text-center text-muted mt-auto">
  <p class="mb-1">
    <small>
      Copyright 2021 <Icon icon={faCopyright} /> by
      <a href="https://github.com/Himyu" class="text-muted">
        <u>Maximilian Bala</u>
      </a>
    </small>
  </p>
  <a href="https://github.com/Himyu/til-trinkt" class="text-muted">
    <small>view this project on <Icon icon={faGithub} /></small>
  </a>
</footer>
