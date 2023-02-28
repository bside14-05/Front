"use client";
import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

function Portal({ children, selector }: PortalProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (document) {
      setElement(document.getElementById(selector));
    }
  }, []);

  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(children, element);
}

export default Portal;
