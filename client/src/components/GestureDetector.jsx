import { useRef } from "react";

const GestureDetector = () => {
  const videoRef = useRef();

  return (
    <video
      ref={videoRef}
      width="640"
      height="480"
      style={{ display: "none" }}
      autoPlay
      muted
    />
  );
};

export default GestureDetector;
