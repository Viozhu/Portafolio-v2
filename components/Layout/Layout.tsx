import * as React from "react";
import Head from "next/head";
import { Navbar } from "../NavBar/navbar";
import Particles from "react-tsparticles";

interface Props {
  children: any;
  title: String;
}

const Layout = ({ children, title = "" }: Props) => {
  return (
    <div className="bg-space-dark -m-2 overflow-x-hidden w-auto min-h-screen text-white">
      <Head>
        <title>{title}</title>
        <link
          id="page_favicon"
          href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMlKf8jJSn/IyUp/yMlKf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/yMlKf+04N+NtODfjbTg34204N+NIyUp/yMlKf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/7Tg34204N+NtODfjbTg34204N+NtODfjbTg34204N+NIyUp/wAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/7Tg34204N+NtODfjbTg34204N+NtODfjSMlKf8jJSn/IyUp/7Tg340jJSn/AAAAAAAAAAAAAAAAAAAAACMlKf+04N+NtODfjbTg34204N+NIyUp/yMlKf8AAAAAAAAAAAAAAAAjJSn/IyUp/wAAAAAAAAAAAAAAACMlKf+04N+NtODfjbTg34204N+NIyUp/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMlKf8AAAAAAAAAAAAAAAAjJSn/tODfjbTg34204N+NIyUp/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/7Tg34204N+NtODfjSMlKf8AAAAAAAAAAAAAAAAAAAAAIyUp/wAAAAAAAAAAAAAAAAAAAAAjJSn/AAAAACMlKf+04N+NtODfjSMlKf8AAAAAAAAAAAAAAAAAAAAAAAAAACMlKf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/7Tg340jJSn/AAAAAAAAAAAAAAAAIyUp/yMlKf8AAAAAIyUp/yMlKf8AAAAAAAAAAAAAAAAAAAAAAAAAACMlKf+04N+NIyUp/wAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/7Tg340jJSn/AAAAAAAAAAAAAAAAAAAAACMlKf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJSn/IyUp/yMlKf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyUp/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMlKf8AAAAAAAAAAAAAAAAAAAAAIyUp/wAAAAAjJSn/AAAAAAAAAAAjJSn/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJSn/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+H8AAOAfAADADwAAgAcAAIDnAAAD9wAAB/8AAAe9AAAPvwAAjk8AAI+/AADHvwAA4/sAAP71AAC/+wAA//8AAA=="
          rel="icon"
          type="image/x-icon"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-auto h-full z-50 sticky top-0 bg-space-dark/80 backdrop-blur-sm">
        <Navbar />
      </div>
      <div className="relative z-10">
        {children}
      </div>
      <Particles
        className="z-0 w-full h-full absolute top-0 left-0"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 200,
                size: 4,
                duration: 2,
                opacity: 0.8,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default Layout;
