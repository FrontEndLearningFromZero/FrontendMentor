"use client";
import React from "react";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
const App = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default App;
