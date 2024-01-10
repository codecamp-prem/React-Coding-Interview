import { useSyncExternalStore } from "react";

const subscribe = (cb) => {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
};

const getSnapshot = () => {
  return navigator.language;
};

const getServerSnapshot = () => {
  throw Error("usePreferredLanguage is a client-only hook");
};

const usePreferredLanguage = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default usePreferredLanguage;
