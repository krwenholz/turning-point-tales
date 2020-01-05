export const getDispatchChange = dispatch => (e, path) => {
  dispatch('edit', {
    path,
    value: e.target.textContent.trim(),
  });
}
