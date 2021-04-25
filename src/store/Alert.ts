import { writable } from 'svelte/store'
import type { DisplayError } from '../../types/DisplayError';

export const Alert = function () {
  const { subscribe, set, update } = writable<DisplayError>({
    show: false,
    color: "danger",
    heading: "Error",
    text: "",
  });
  return {
    subscribe,
    set,
    show: () => { update(alert => {
      alert.show = true
      return alert
    })},
    hide: () => { update(alert => {
      alert.show = false
      return alert
    })}
  }
}()