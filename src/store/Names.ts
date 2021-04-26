import { writable } from 'svelte/store'

export const Names = writable<string[]>([]);
export const ShowNames = writable<boolean>(false);