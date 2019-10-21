import sql from 'sql';

sql.setDialect('postgres');

const _stories = sql.define({
  name: 'stories',
  columns: ['id', 'author', 'title', 'content', 'tags', 'general_release', 'created', 'modified'],
});

// TODO(kyle): write a smarter query that doesn't fetch all of the stories,
// just the parts we need
export const listAllQuery = _stories
  .select(_stories.star())
  .from(_stories)
  .toQuery();

export const selectQuery = (id) => _stories
  .select(_stories.star())
  .from(_stories)
  .where(_stories.id.equals(id))
  .toQuery();
