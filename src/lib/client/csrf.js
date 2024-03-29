import { safeWindow } from "src/lib/client/safe-window";

const fetchCsrf = () => {
  return safeWindow()
    .document.cookie.split(";")
    .filter(item => {
      return item.trim().indexOf("XSRF-TOKEN=") == 0;
    })[0]
    .replace("XSRF-TOKEN=", "")
    .trim();
};

export { fetchCsrf };
