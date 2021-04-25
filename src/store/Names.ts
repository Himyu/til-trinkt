import { writable } from 'svelte/store'

export const Names = function () {
  const { subscribe, update } = writable<string[]>([]);
  return {
    subscribe,
    add: (name : string) => { update(names => {
      return [...names, name]
    }) },
  }
}()