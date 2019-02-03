import sql from 'sql';

sql.setDialect('postgres');

const stories = sql.define({
  name: 'stories',
  columns: ['id', 'title', 'content', 'tags', 'created', 'modified']
});

// TODO(kyle): write a smarter query that doesn't fetch all of the stories,
// just the parts we need
const listAllQuery = stories
  .select(stories.star())
  .from(stories)
  .toQuery();

function selectQuery(id) {
  return stories
    .select(stories.star())
    .from(stories)
    .where(stories.id.equals(id))
    .toQuery();
}

export {
  listAllQuery,
  selectQuery
}
