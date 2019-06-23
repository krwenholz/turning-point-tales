const fakeStorage = {
  removeItem: () => null,
  setItem: () => null,
  getItem: () => null,
  key: () => null,
  length: () => null,
  clear: () => null,
};

const fakeWindow = {
  localStorage: { ...fakeStorage },
  sessionStorage: { ...fakeStorage },
  scrollBy: () => {},
  location: {
    pathname: () => '',
    replace: () => '',
    href: () => '',
  },
  history: {
    pushState: () => '',
  },
}

export const safeWindow = new Proxy({}, {
  get: (_, prop) => typeof (window) === 'undefined' ? fakeWindow[prop] : window[prop]
});
