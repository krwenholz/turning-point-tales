export const getDispatches = dispatch => (e, {
  value,
  path,
  type,
  idx,
  keyCode,
  storyNode,
  nodeToFocus
}) => {
    if(keyCode === 13) {
      return dispatch('enter', { value, path, type, idx, storyNode })
    }
    dispatch('edit', { value, path, type, storyNode });
}
