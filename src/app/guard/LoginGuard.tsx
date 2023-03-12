import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

import { authAtom } from "@/store/auth";

import useMountedCheck from "@/hooks/useMountedCheck";

interface Props {
  children: ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const auth = useRecoilValue(authAtom);
  const checkAuth = auth.isAuthenticated;

  const isMount = useMountedCheck();
  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (checkAuth) {
      setRequestedLocation(null);
    }
  }, [checkAuth, isMount, pathname, requestedLocation, push]);

  if (!isMount) {
    if (checkAuth === false) {
      if (pathname !== requestedLocation) {
        setRequestedLocation(pathname);
      }
      return <></>;
    }
  }

  return <>{children}</>;
}
