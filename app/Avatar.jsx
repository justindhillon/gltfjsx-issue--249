"use client"

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Avatar(props) {
  const { nodes, materials } = useGLTF("/Dogdaytg.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dogdat_1.geometry}
          material={materials.Meshminappycateye01Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dogdat_2.geometry}
          material={materials.Meshmibiggerbodydogbelt01Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dogdat_3.geometry}
          material={materials.Meshmibiggerbodydogmain01Mtl}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Dogdaytg.glb");
