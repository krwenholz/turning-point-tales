export const getDispatches = dispatch => ({
  input(e, {
    value,
    previousValue,
    path,
    type,
    idx,
    keyCode,
    storyNode,
  } = {}) {
    if(!keyCode && previousValue === value) return;
    dispatch('edit', { value, path, type, storyNode });
  },
  keydown(e, {
    value,
    previousValue,
    path,
    type,
    idx,
    keyCode,
    storyNode,
  } = {}) {
    if(keyCode === 13) {
      return dispatch('enter', { value, path, type, idx, storyNode })
    }
  }
})
