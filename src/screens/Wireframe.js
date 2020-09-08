import React from "react";
import Image from "react-bootstrap/Image";

import phone from "../iphone.png";

export default function Wireframe({ src, style }) {
  return (
    <div>
      <Image
        src={phone}
        style={{
          float: "left",
          marginLeft: style.marginLeft,
          width: style.width,
        }}
      />
      <Image
        src={src}
        style={{
          width: style.iWidth,
          position: "absolute",
          top: style.top,
          left: style.left,
        }}
      />
    </div>
  );
}
