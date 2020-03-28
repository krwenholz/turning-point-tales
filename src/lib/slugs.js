import { kebabCase } from "lodash";

export const idFromSlug = slug => {
  // foobarthings-blah-600cb3d1-79f9-443d-a6ad-71f2143bdc33
  const match = slug.match(
    new RegExp(
      ".*(?<id>[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})$"
    )
  );
  if (match === undefined) return null;

  return match.groups.id;
};

export const slug = (humanese, id) => {
  return `${kebabCase(humanese).substring(0, 19)}-${id}`;
};
