"use client";
import React from "react";
import theme from "./theme";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
const App = ({ Component, pageProps }: AppProps) => (
    <ConfigProvider theme={theme}>
        <Component {...pageProps} />
    </ConfigProvider>
);

export default App;
