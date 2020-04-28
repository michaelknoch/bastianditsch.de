import React from "react";
import { Html, Head, Body } from "react-static";

export default {
    getSiteData: () => ({
        title: "Bastian Ditsch - Video Editor",
    }),
    plugins: ["react-static-plugin-sass"],
    Document: ({ Html, Head, Body, children }) => (
        <Html>
            <Head>
                <title>Bastian Ditsch - Video Editor</title>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Body>{children}</Body>
        </Html>
    ),
};
