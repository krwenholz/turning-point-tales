export const normalizeToPackagedStory = (packagedStory) => {
  return packagedStory.story ? packagedStory : {
    story: packagedStory,
    title: '',
    author: '',
    preview: '',
    badges: [],
  }
}
