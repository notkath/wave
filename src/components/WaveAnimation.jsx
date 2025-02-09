import { useRef, useMemo, Suspense, useCallback } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import circleImg from "../assets/circle.png";
import './WaveAnimation.css'

function Points() {
  const imgTex = useTexture(circleImg);
  const bufferRef = useRef();

  let t = useRef(0);
  const frequency = 0.002;
  const amplitude = 3;
  const count = 100;
  const sep = 3;

  const graph = useCallback((x, z) => {
    return Math.sin(frequency * (x ** 2 + z ** 2 + t.current)) * amplitude;
  }, []);

  // Initial positions
  const positions = useMemo(() => {
    let positionsArray = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positionsArray.push(x, y, z);
      }
    }
    return new Float32Array(positionsArray);
  }, []);

  // Animate points using useFrame
  useFrame(() => {
    t.current += 15; // Increment animation time
    const positionsArray = bufferRef.current.array;
    
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positionsArray[i + 1] = graph(x, z); // Update Y values
        i += 3;
      }
    }
    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={imgTex}
        color={0x00000}
        size={0.5}
        sizeAttenuation
        transparent
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    // Add a wrapper div around your Canvas
<div 
  style={{ 
    background: "linear-gradient(to bottom,rgb(9, 9, 132),rgb(107, 107, 226))",
    width: "100%", 
    height: "100vh" 
  }}
>
  <Canvas camera={{ position: [100, 10, 0], fov: 75 }} style={{ width: "100%", height: "100vh" }}>
    <OrbitControls autoRotate autoRotateSpeed={-0.2} />
    <Suspense fallback={null}>
      <Points />
    </Suspense>
  </Canvas>
</div>
  );
}
function WaveAnimation(){
  return(
    <div>
      <AnimationCanvas/>
    </div>
  )
    
}
export default WaveAnimation;