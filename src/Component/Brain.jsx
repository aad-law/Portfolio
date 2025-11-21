import { useRef, useEffect, useState } from "react";
import { Application } from "@splinetool/runtime";

export default function Brain() {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app
      .load("https://prod.spline.design/D9RnWl4sD9qhPf2e/scene.splinecode")
      .then(() => setLoaded(true)); 
  }, []);

  return (
    <div className="spline-slide-in">
      {!loaded && <div className="loader">...Hello World...</div>}
      <canvas ref={canvasRef} className={loaded ? "" : "hidden"} />
    </div>
  );
}
