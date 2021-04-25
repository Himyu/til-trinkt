import { writable } from 'svelte/store'

export const Chronic = function () {
  const { subscribe, update } = writable<string[]>([]);
  return {
    subscribe,
    add: (name : string) => { update(chronic => {
      return [...chronic, name]
    }) },
  }
}()