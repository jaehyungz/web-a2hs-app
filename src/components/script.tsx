"use client";

import React, { useEffect } from "react";

interface Props {}

function LayoutScript(props: Props) {
  const {} = props;

  useEffect(() => {
    const setServiceWorker = () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
      }
    };
    setServiceWorker();
  }, []);

  return <></>;
}

export default LayoutScript;
