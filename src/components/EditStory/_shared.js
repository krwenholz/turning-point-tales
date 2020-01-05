export const getDispatches = dispatch => ({ keyCode, value, path, type, idx, storyNode }) => {
    if(keyCode === 13) {
      return dispatch('enter', { value, path, type, idx, storyNode })
    }
    dispatch('edit', { value, path, type, storyNode });
}
