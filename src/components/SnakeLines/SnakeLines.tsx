import { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { App } from "rendera";

const SnakeLine = () => {
  const [points, setPoints] = useState([
    new THREE.Vector3(5, -5, 0), // Initial position of the snake
  ]);

  const snakeWidth = 5; // Thickness of the snake (larger value in 3D world)
  const curveDistance = 0.2; // Reduced distance for a faster left turn
  const [turnCompleted, setTurnCompleted] = useState(false);

  useFrame((_, delta) => {
    setPoints((prevPoints) => {
      const lastPoint = prevPoints[prevPoints.length - 1];
      let newX = lastPoint.x;
      let newY = lastPoint.y + delta * 2; // Move upwards

      // Calculate the angle for a smooth left turn over the curve distance
      if (
        lastPoint.y > 1 &&
        lastPoint.y < 1 + curveDistance &&
        !turnCompleted
      ) {
        const progress = (lastPoint.y - 1) / curveDistance;
        const angle = progress * (Math.PI / 2); // 90 degrees in radians
        newX = lastPoint.x - Math.sin(angle) * delta * 2;
        newY = lastPoint.y + Math.cos(angle) * delta * 2;
      } else if (lastPoint.y >= 1 + curveDistance && !turnCompleted) {
        setTurnCompleted(true); // Mark the turn as completed
      }

      // Add new point
      const newPoints = [...prevPoints, new THREE.Vector3(newX, newY, 0)];

      return newPoints;
    });
  });

  useEffect(() => {
    console.log("Points:", points);
  }, [points]);

  return <Line points={points} color="green" lineWidth={snakeWidth} />;
};

export const SnakeLines = () => {
  return (
    // <Canvas style={{ width: "80vw", height: "80vh" }}>
    //   <ambientLight intensity={0.1} />
    //   <directionalLight position={[0, 0, 5]} />
    //   <SnakeLine />
    // </Canvas>
    <App />
  );
};
