import { writable } from 'svelte/store';
import { pullAt, dropRight, drop, last, set, get } from 'lodash';

export const setWrittable = (initial) => {
  const { set, subscribe, update } = writable(initial);

  return {
    set,
    subscribe,
    setAt: (value, path) => update(prev => {
      const temp = { ...prev };
      set(temp, path, value);
      return temp;
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
    pushAt: (value, path) => update(prev => {
      const temp = [ ...prev ];

      set(temp, path, [...get(prev, path), value]);
      return temp;
    })
  }
}

// story.setAt(text, [0, 'story', 'text', 1])
