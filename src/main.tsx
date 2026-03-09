import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ParallaxProvider } from "react-scroll-parallax";
import GlobalContextProvider from "./lib/GlobalContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.2,
      }}
    >
      <ParallaxProvider>
        <GlobalContextProvider>
          <Router>
            <App />
          </Router>
        </GlobalContextProvider>
      </ParallaxProvider>
    </ReactLenis>
  </React.StrictMode>
);
