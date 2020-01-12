import { writable } from 'svelte/store';
import { pullAt, dropRight, drop, last, set as lodashSet, get } from 'lodash';

export const pathWrittable = (initial) => {
  const { set, subscribe, update } = writable(initial);

  return {
    set,
    subscribe,
    setAt: (value, path) => update(prevState => {
      lodashSet(prevState, path, value);
      return prevState;
    }),
    getAt: (path) => {
      let prevState;

      update(_prevState => prevState = _prevState);

      return path ? get(prevState, path) : prevState;
    },
    dropAt: (path) => update(prevState => {
      if(path.length === 1) {
        pullAt(prevState, path);
      }
      else {
        pullAt(
          get(prevState, dropRight(path)),
          last(path)
        );
      }

      return prevState;
    }),
    concatAt: (value, path) => update(prevState => {
      lodashSet(prevState, path, [...get(prevState, path), value]);

      return prevState;
    })
  }
}
