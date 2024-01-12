import { useCallback, useState } from "react";

const placeholder = () => {};

const useQueue = (initialValue = []) => {
  const [queue, setQueue] = useState<typeof initialValue>(initialValue);

  const add = useCallback((element) => {
    setQueue((q) => [...q, element]);
  }, []);

  const remove = useCallback(() => {
    let removedElement;
    setQueue(([first, ...q]) => {
      removedElement = first;
      return q;
    });
    return removedElement;
  }, []);

  const clear = useCallback(() => {
    setQueue([]);
  }, []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue,
  };
};

export default useQueue;
