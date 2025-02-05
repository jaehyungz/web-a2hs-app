"use client";

import Link from "next/link";
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

  return (
    <>
      <Link rel="apple-touch-icon" href="/logo-single.png" />
      <Link rel="manifest" href="/manifest.webmanifest" />
    </>
  );
}

export default LayoutScript;
