import { writable } from 'svelte/store';
import { pullAt, dropRight, drop, last, set, get, clone } from 'lodash';

export const settable = (initial) => {
  const { subscribe, update } = writable(initial);

  return {
    subscribe,
    set: (set) => update(set),
    setAt: (path, value) => update(prev => {
      const temp = { ...prev };
      set(temp, path, value);
      return temp;
    }),
    pull: (path) => update(prev => {
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
    pushAt: (value, path) => update(prev => {
      const temp = [ ...prev ];

      set(temp, path, [...get(prev, path), value]);
      return temp;
    })
  }
}
