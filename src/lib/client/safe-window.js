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
  scrollTo: () => {},
  scrollBy: () => {},
  location: {
    pathname: () => '',
    replace: () => '',
    href: () => '',
  },
  history: {
    replaceState: () => '',
  },
  document: {
    activeElement: {
      blur: () => {},
    }
  }
}

export const safeWindow = () => typeof (window) === 'undefined' ? fakeWindow: window;
