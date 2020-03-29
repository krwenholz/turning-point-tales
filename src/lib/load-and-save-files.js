export const loadFile = callback => {
  const input = document.createElement("input");
  input.type = "file";
  input.click();

  input.onchange = onChangeEvent => {
    const reader = new FileReader();

    reader.onload = onLoadEvent => {
      callback(onLoadEvent.target.result);
    };

    reader.readAsText(onChangeEvent.target.files[0]);
  };
};

export const saveFile = ({ fileName, text }) => {
  const storyBlob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(storyBlob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();

  window.URL.revokeObjectURL(url);
};
