import yaml from "js-yaml";

export const loadFile = (callback) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.click();

  input.onchange = (onChangeEvent) => {
    const reader = new FileReader();

    reader.onload = (onLoadEvent) => {
      callback(yaml.safeLoad(onLoadEvent.target.result));
    }

    reader.readAsText(onChangeEvent.target.files[0]);
  }
}

export const saveFile = (data) => {
  const storyBlob = new Blob([yaml.safeDump(data)], {type : 'text/plain'});
  const url = URL.createObjectURL(storyBlob);

  const a = document.createElement("a");
  a.href = url;
  a.download = 'edited-story.yaml';
  a.click();

  window.URL.revokeObjectURL(url);
};

