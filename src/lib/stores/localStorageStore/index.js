import { writable } from 'svelte/store';
import * as preDefined from './uniqueKeys.js';

const isPreDefinedKey = (key) => Object.keys(preDefined).includes(key)

const safeStorage = () => {
  if(typeof(window) === 'undefined') {
    return {
      setItem: () => null,
      getItem: () => null,
      hasOwnProperty: () => null,
    }
  }

  return window.localStorage;
}

export const localStorageStore = (key, initial = null) => {
  if(!isPreDefinedKey(key)) {
    throw(new Error(`
      Expected pre-defined local storage key, instead recieved custom storage key.
      Use imported keys from localStorage for global uniqueness.
    `));
  }

  if(!safeStorage().hasOwnProperty(key)) {
    safeStorage().setItem(key, JSON.stringify(initial));
  }

  const { subscribe, set, update } = writable(
    JSON.parse(safeStorage().getItem(key))
  );

  return {
    subscribe,
    set: (value) => {
      safeStorage().setItem(key, JSON.stringify(value));
      update(() => value);
    },
  };
}

export * from './uniqueKeys.js';
