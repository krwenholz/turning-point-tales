export const getDispatches = dispatch => ({
  keydown({ keyCode, value, path, type, idx, storyNode }) {
    debugger;
    if(keyCode === 13) {
      return dispatch('enter', { value, path, type, idx, storyNode })
    }
  },
  edit({ value, path }) {
    debugger;
    dispatch('edit', { value, path });
  }
})
