import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export function WavyLine({
  startX = 0,
  startY = 0,
  startZ = 0,
  color = "black",
  basicPoints,
  size = 50,
  opacity = 1,
}) {
  const lineRef = useRef();
  const points = useRef([]);
  const waveSpeed = 0.002; // Prędkość falowania

  // Inicjalizacja punktów linii
  useEffect(() => {
    // Tworzymy pionową linię z lekkim zakrzywieniem
    points.current = basicPoints.map(
      ({ x, y, z }) => new THREE.Vector3(x + startX, y + startY, z + startZ)
    );

    // Ustawiamy punkty na linii
    lineRef.current.geometry.setFromPoints(points.current);
  }, [basicPoints, startX, startY, startZ]);

  // Animacja linii
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const geometry = lineRef.current.geometry;

    points.current.forEach((point, i) => {
      // Dodajemy ruch falujący wzdłuż osi X i Z
      point.x += Math.sin(time + i * 0.2) * waveSpeed;
      point.z += Math.cos(time + i * 0.3) * waveSpeed;
    });

    // Aktualizujemy geometrię linii
    geometry.setFromPoints(points.current);
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color={color}
        linewidth={size}
        transparent
        opacity={opacity}
      />
    </line>
  );
}
