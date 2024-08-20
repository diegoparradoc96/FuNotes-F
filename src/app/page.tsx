"use client";
import React from "react";

/* global provider */
import GlobalProvider from "../context/GlobalProvider";
/* views */
import Main from "./main/page";

export default function Home() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}
