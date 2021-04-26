const sveltePreprocess = require('svelte-preprocess')
const json = require('@rollup/plugin-json')

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  json: json({
    compact: true
  })
}
