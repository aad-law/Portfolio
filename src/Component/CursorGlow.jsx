// import React, { useEffect, useState } from "react";

// export default function CursorGlow() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMove = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         pointerEvents: "none",
//         zIndex: 0,
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: pos.y - 150,
//           left: pos.x - 150,
//           width: "300px",
//           height: "300px",
//           background: "radial-gradient(circle, rgba(139,92,246,0.25), transparent 60%)",
//           filter: "blur(70px)",
//           borderRadius: "50%",
//           transition: "transform 0.05s linear",
//         }}
//       />
//     </div>
//   );
// }
