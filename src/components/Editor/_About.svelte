<script>
  import TextArea from "src/components/TextArea";
  import Plus from "src/components/icons/Plus.svelte";
  import Button from "src/components/Button.svelte";
  import Input from "src/components/Input/index";
  import Trash from "src/components/icons/Trash.svelte";
  import Checkbox from "src/components/Checkbox";

  export let author = '';
  export let title = '';
  export let preview = '';
  export let onKeydown = () => {};
  export let onInput = () => {};
  export const clearFocusPath = () => {};
</script>

<style>
  .about-story {
    margin-right: 32px;
    --form-group-spacing: 24px;
    flex: 1;
  }

  ul {
    height: 100%;
    display: flex;
    flex-flow: column;
  }

  .form-group {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-top: var(--form-group-spacing);
  }

  .form-group:nth-child(1) {
    margin-top: 0;
  }

  .form-group :global(.text-area),
  .form-group :global(.input) {
    width: 100%;
  }

  .form-group label {
    margin-bottom: 6px;
  }

  .preview {
    flex: 1;
  }
  .preview :global(textarea) {
    height: 100%;
  }
</style>

<section class="about-story">
  <ul>
    <li class="form-group">
      <label for='about-story-title'>Title</label>
      <Input
        id='about-story-title'
        value={title}
        placeholder="A Fancy Title"
        on:input="{e => onInput(e, {
          location: 'title',
          prevValue: title
        })}"
        on:keydown="{e => onKeydown(e, {
          location: 'title',
          prevValue: title,
        })}"
      />
    </li>

    <li class="form-group">
      <label for='about-story-author'>Author</label>
      <Input
        id='about-story-author'
        value={author}
        placeholder="Author's Full Name"
        on:input="{e => onInput(e, {
          location: 'author',
          prevValue: author
        })}"
        on:keydown="{e => onKeydown(e, {
          location: 'author',
          prevValue: author,
        })}"
      />
    </li>

    <li class="form-group preview">
      <label for='about-story-preview'>Preview</label>
      <TextArea
        id="about-story-preview"
        value={preview}
        placeholder="A tale of great excitement"
        on:input="{e => onInput(e, {
          location: 'preview',
          prevValue: preview,
        })}"
        on:keydown="{e => onKeydown(e, {
          location: 'preview',
          prevValue: preview,
        })}"
      />
    </li>
  </ul>
</section>
