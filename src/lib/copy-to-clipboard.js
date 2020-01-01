export const copyToClipboard = text => {
  const node = document.createElement('textarea');
  node.value = text;
  node.setAttribute('readonly', '');
  node.style.position = 'absolute';
  node.style.left = '-99999px';

  document.body.appendChild(node);
  node.select();
  document.execCommand('copy');
  document.body.removeChild(node);
};