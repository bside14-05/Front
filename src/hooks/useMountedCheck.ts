import { useRef, useEffect } from "react";

export default function useMountedCheck() {
  const isMounted = useRef(true);

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );

  return isMounted;
}
