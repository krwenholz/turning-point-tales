import { writable } from 'svelte/store';
import { pullAt, last, dropRight, set, get, clone } from 'lodash';

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
    dropAt: (path) => update(prev => {
      const idx = last(path);

      if(path.length === 1) {
        pullAt(prev, idx);
      } else {
        pullAt(
          get(prev, dropRight(path)),
          idx,
        );
      }

      return prev;
    }),
    concatAt: (path, value) => update(prev => {
      const temp = { ...prev };
      set(temp, path, [...get(prev, path), value]);
      return temp;
    })
  }
}

[1,2,3];

const story = {
  decisions: [
    {

    },
    {

    },
  ]
}
