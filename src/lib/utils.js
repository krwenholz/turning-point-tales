export const uniq = (list = []) => (
  [...new Set([...list || []])]
);

export const last = (list = []) => list[list.length - 1];

export const first = (list = []) => list[0];

export const stripNulls = hash => hash.toString("utf-8").replace(/\0/g, "");

export const addNullPadding = hash => {
  const fullHash = Buffer.alloc(128);
  fullHash.write(hash.toString());

  return fullHash;
}