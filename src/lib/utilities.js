import { take, takeRight, set, clone } from 'lodash';

export const dropIdx = (coll, idx) => ([
  ...take(coll, idx),
  ...takeRight(coll, (coll.length - idx - 1)),
]);

/**
 * lodash 'set' does not trigger a reactive update, but setting, THEN
 * returning the object for assignment does #ShrugEmoji
 */
export const setAt = (object, path, value) => {
  set(object, path, value);
  return object;
}
