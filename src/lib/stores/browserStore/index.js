import {
  writable
} from 'svelte/store';
import * as preDefinedKeys from './preDefinedKeys.js';

const isPreDefinedKey = (key) => {
  return Object.keys(preDefinedKeys).some((knownKey) => {
    return knownKey === key || key.startsWith(knownKey + '-');
  });
};

export const browserStore = (key, storage, initial = null) => {
  if (!isPreDefinedKey(key)) {
    throw (new Error(`
      Expected pre-defined browser key, instead recieved custom storage key.
      Use imported keys from uniqueKeys for global uniqueness.
    `));
  }

  const {
    subscribe,
    set,
    update
  } = writable({
    ...initial,
    ...JSON.parse(storage.getItem(key)),
  });

  return {
    subscribe,
    set: (value) => {
      storage.setItem(key, JSON.stringify(value))
      update(() => JSON.parse(storage.getItem(key)));
    }
  };
}
