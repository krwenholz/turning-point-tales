// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
const stories = [
	{
		title: 'My other half',
		slug: 'my-other-half',
		tags: ['gluten-free', 'erotic', 'spooky'],
    preview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates animi eligendi ut odit magnam quaerat autem molestiae culpa sequi, consequatur ipsum qui! Voluptas debitis illo eos dolor non dicta. Omnis!',
    previewPrompt: 'You find yourself abandoned in a grass field',
	},
	{
		title: 'A wind in the leaves',
		slug: 'leafy-wind',
		tags: ['spooky', 'erotic', 'gluten-free'],
    preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a veniam voluptatum qui eaque. Odit officiis atque doloribus, adipisci enim modi sunt velit porro odio quaerat? Rem provident sapiente ad?',
    previewPrompt: 'You head north, towards the burning bush...',
	},
	{
		title: 'The end of ze world',
		slug: 'end-of-ze-world',
		tags: ['vegan', 'boring', 'tech', 'republican', 'magic', 'kerfuffle'],
    preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a veniam voluptatum qui eaque. Odit officiis atque doloribus, adipisci enim modi sunt velit porro odio quaerat? Rem provident sapiente ad?',
    previewPrompt: 'Start reading',
	},
];

export default stories;

