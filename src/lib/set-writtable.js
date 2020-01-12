import { writable } from 'svelte/store';
import { pullAt, dropRight, drop, last, set as lodashSet, get } from 'lodash';

export const setWrittable = (initial) => {
  const { set, subscribe, update } = writable(initial);

  return {
    set,
    subscribe,
    setAt: (value, path) => update(prev => {
      lodashSet(prev, path, value);
      return prev;
    }),
    dropAt: (path) => update(prev => {
      if(path.length === 1) {
        pullAt(prev, path);
      }
      else {
        pullAt(
          get(prev, dropRight(path)),
          last(path)
        );
      }

      return prev;
    }),
    concatAt: (value, path) => update(prev => {
      lodashSet(prev, path, [...get(prev, path), value]);

      return prev;
    })
  }
}
