import React, { useState, useEffect } from "react";

import "./App.css";
import { About, Work, Project } from "./screens/Content";
import { makeStyles } from "@material-ui/core/styles";
import WLogo from "./waffleLogo.png";
import ULogo from "./Signals@2x.png";
import wf1 from "./wf1.png";
import wf2 from "./wf2.png";
import wf3 from "./wf3.png";
import wf4 from "./wf4.png";
import Wireframe from "./screens/Wireframe";

import Image from "react-bootstrap/Image";

export function getScrollPosition() {}

function App() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = useStyles();
  return (
    <div className={"App"} style={{ margin: "1%" }}>
      <div
        style={{
          position: "fixed",
          textAlign: "center",
          width: "33%",
          marginRight: "33%",
          marginLeft: "33%",
          zIndex: 1,
          backgroundColor: "#eee",
          opacity: 0.9,
          borderRadius: 5,
        }}
      >
        <h1 className={classes.root}>Theodore Jay Klausner</h1>
      </div>
      <div
        style={{
          position: "fixed",
          overflow: "hidden",
          right: scrollPosition,
          marginTop: "7%",
        }}
      >
        <About scrollPosition={scrollPosition} />
      </div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "#00b8fa",
          borderRadius: 5,
          width: "60%",
          height: "84%",
          bottom:
            scrollPosition < window.outerHeight
              ? scrollPosition - window.outerHeight
              : 0,
          left:
            scrollPosition > window.outerHeight + 320
              ? window.outerHeight + 320 - scrollPosition
              : 10,
          marginLeft: "-1%",
          paddingLeft: "1%",
          paddingRight: "1%",
          paddingTop: "1%",
        }}
      >
        <Work />
      </div>
      <div
        style={{
          position: "fixed",
          marginTop: "-1%",
          backgroundColor: "#00b8fa",
          borderRadius: 5,
          width: "80%",
          height: "100%",
          left: scrollPosition - (window.outerHeight + 1250),
          textAlign: "right",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          marginTop: "-1%",
          backgroundColor: "#EC213F",
          borderRadius: 5,
          width: "20%",
          height: "100%",
          paddingRight: "2%",
          paddingLeft: "2%",
          right:
            scrollPosition < window.outerHeight + 350
              ? scrollPosition - (window.outerHeight + 350)
              : 0,
          textAlign: "left",
        }}
      >
        <Image src={ULogo} style={{ width: "95%", padding: "3%" }} />
        <h1 style={{ textAlign: "center", color: "#eee" }}>Coming Soon</h1>
      </div>
      <div
        style={{ height: window.outerHeight + 1880, backgroundColor: "#fff" }}
      ></div>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#3B3B3B",
  },
}));
