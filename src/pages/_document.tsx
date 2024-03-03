import Nav from "@/components/Navigation/Nav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
