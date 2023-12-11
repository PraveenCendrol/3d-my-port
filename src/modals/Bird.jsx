import React, { useEffect, useRef } from "react";
import bird from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const Bird = () => {
  const { scene, animations } = useGLTF(bird);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }, delta) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.1;
      birdRef.current.position.z -= 0.1;
    } else {
      birdRef.current.position.x -= 0.1;
      birdRef.current.position.z += 0.1;
    }
  });
  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
