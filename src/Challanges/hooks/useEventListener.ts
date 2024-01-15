// Listen for events on a target element with useEventListner.

import { useEffect, useRef } from "react";

const useEventListener = (target, eventName, handler, options = {}) => {
  const onEvent = useRef(handler);
  useEffect(() => {
    onEvent.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = target.current ?? target;

    if (!targetElement?.addEventListener) return;

    targetElement.addEventListener(eventName, onEvent, options);

    return () => {
      targetElement.removeEventListener(eventName, onEvent, options);
    };
  }, [target, eventName, options]);
};

export default useEventListener;
