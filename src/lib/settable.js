import { writable } from 'svelte/store';
import { pullAt, last, set, get, clone } from 'lodash';

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
    pullAt: (path, ...idxs) => update(prev => {
      idxs.flat().forEach(idx => {
        pullAt(get(prev, path), idx);
      })

      return prev;
    }),
    pushAt: (path, value) => update(prev => {
      const temp = [ ...prev ];
      set(temp, path, [...get(prev, path), value]);
      return temp;
    })
  }
}
