import { take, takeRight } from 'lodash';

export const dropIdx = (coll, idx) => ([
  ...take(coll, idx),
  ...takeRight(coll, (coll.length - idx - 1)),
]);
