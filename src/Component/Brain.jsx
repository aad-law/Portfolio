import { useRef, useEffect, useState } from "react";
import { Application } from "@splinetool/runtime";

export default function Brain() {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(window.innerWidth <= 768);

    // Don't load Spline on mobile
    if (window.innerWidth <= 768) return;

    const app = new Application(canvasRef.current);
    app
      .load("https://prod.spline.design/D9RnWl4sD9qhPf2e/scene.splinecode")
      .then(() => setLoaded(true));
  }, []);

  // Show nothing on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div className="spline-slide-in">
      {!loaded && <div className="loader">...Hello World...</div>}
      <canvas ref={canvasRef} className={loaded ? "" : "hidden"} />
    </div>
  );
}