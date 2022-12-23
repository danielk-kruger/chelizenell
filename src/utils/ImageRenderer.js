import React, { useState, useRef } from "react";
import classnames from "classnames";
import { useIntersection } from "../hooks/IntersectionObserver";

import "./imageRenderer.scss";

const ImageRenderer = ({ image, thumb }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {isInView && (
        <>
          <img
            className={classnames("image", "thumb", {
              ["isLoaded"]: !!isLoaded,
            })}
            src={thumb}
          />
          <img
            className={classnames("image", {
              ["isLoaded"]: !!isLoaded,
            })}
            src={image}
            onLoad={handleOnLoad}
          />
        </>
      )}
    </div>
  );
};

export default ImageRenderer;
