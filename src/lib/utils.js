export const uniq = (list = []) => (
  [...new Set([...list || []]) ]
);

export const last = (list = []) => list[list.length - 1];

export const first = (list = []) => list[0];

