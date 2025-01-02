import { Canvas } from "@react-three/fiber";
import { WavyLine } from "./WavyLine";

export const SpiralLines = () => {
  const numPoints = 150; // Liczba punktów na linii
  const height = 20; // Wysokość linii
  const waveAmplitude = 0.5; // Amplituda falowania
  const waveFrequency = 0.8; // Częstotliwość falowania
  const points = Array.from({ length: numPoints }, (_, i) => {
    const x = (i / (numPoints - 1)) * height - height / 2; // Ustawiamy punkty wzdłuż osi Y
    const y = Math.sin(x * waveFrequency) * waveAmplitude - 1; // Początkowe lekkie zakrzywienie na osi X
    const z = Math.cos(x * waveFrequency) * waveAmplitude; // Początkowe lekkie zakrzywienie na osi Z
    return { x, y, z };
  });

  return (
    <Canvas style={{ width: "80vw", height: "80vh" }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      {Array.from({ length: 30 }, () => Math.random()).map((line, i) => (
        <WavyLine
          key={i}
          basicPoints={points}
          startY={0.05 * i}
          startX={0.025 * i}
          startZ={0.1 * i}
          opacity={0.4 * (0.05 * i)}
          color="blue"
        />
      ))}
    </Canvas>
  );
};
