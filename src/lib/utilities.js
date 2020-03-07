import { omit } from 'lodash';

export const renameKey = (object, key, newKey) => ({
  ...omit(object, [key]),
  [newKey]: object[key]
})
