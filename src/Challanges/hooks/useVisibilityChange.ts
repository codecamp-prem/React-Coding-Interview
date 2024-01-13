// Track document visibility and respond to changes with useVisibilityChange

import { useSyncExternalStore } from "react";

const subscribe = (callback) => {
  document.addEventListener("visibilitychange", callback);

  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
};

const getSnapShot = () => {
  return document.visibilityState;
};

const getServerSnapshot = () => {
  throw Error(`ususeVisibilityChange is a client-only hook`);
};

const useVisibilityChange = () => {
  const visibilityState = useSyncExternalStore(
    subscribe,
    getSnapShot,
    getServerSnapshot
  );

  return visibilityState === "visible";
};

export default useVisibilityChange;
