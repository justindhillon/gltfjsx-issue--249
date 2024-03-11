"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { Avatar } from "./Avatar";

export default function Experience() {
  return (
    <Canvas>
      <OrbitControls />
      <Avatar />
      <PerspectiveCamera makeDefault position={[30, 30, 20]} />
    </Canvas>
  );
}