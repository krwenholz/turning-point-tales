import { take, takeRight, set, clone, omit } from "lodash";

export const dropIdx = (coll, idx) => [
  ...take(coll, idx),
  ...takeRight(coll, coll.length - idx - 1)
];

export const renameKey = (object, key, newKey) => ({
  ...omit(object, [key]),
  [newKey]: object[key]
});
