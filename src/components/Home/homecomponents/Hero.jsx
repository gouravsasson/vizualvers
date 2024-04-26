import React from "react";
import * as THREE from "three";
import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, Preload, OrbitControls } from "@react-three/drei";
import { Popconfirm } from "antd";
import img1 from "../../../assets/vr/2294472375_24a3b8ef46_o.jpg";
import img2 from "../../../assets/vr/Photosphere1.jpg";

const store = [
  {
    name: "outside",
    color: "lightpink",
    position: [10, 0, -15],
    url: img1,
    link: 1,
  },
  {
    name: "inside",
    color: "lightblue",
    position: [15, 0, 0],
    url: img2,
    link: 0,
  },
  // ...
];

function Dome({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
        <Html center>
          <Popconfirm
            title="Are you sure you want to leave?"
            onConfirm={onClick}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">{name}</a>
          </Popconfirm>
        </Html>
      </mesh>
    </group>
  );
}

function Portals() {
  const [which, set] = useState(0);
  const { link, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
  return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />;
}

export default function Hero() {
  return (
    <div className=" flex flex-col items-center  h-auto bg-[#191919]">
      <div className=" py-4  text-white text-7xl ">EXPERIENCE VIZUALVERSE </div>

      <div className=" w-[900px] h-[659px] ">
        <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableDamping
            dampingFactor={0.2}
            autoRotate={true}
            rotateSpeed={-0.2}
          />
          <Suspense fallback={null}>
            <Preload all />
            <Portals />
          </Suspense>
        </Canvas>
      </div>
      <div className=" py-4 text-2xl font-bold">Creative & Dazzling</div>
      <div className=" font-bold">Welcome to VIZUALVERSE </div>
      <div className=" text-center pb-4">
        Our strength lies in our interdisciplinary team of creatives, artists,
        and designers. As collaborative partners, we accompany our clients
        through <br /> every phase of a project, ensuring a seamless blend of
        storytelling, captivating visuals, and experiential excellence. Our
        commitment is to <br /> breathe life into real estate brands, forging
        lasting value and recognition.
      </div>
      <div className=" text-center pb-4">
      Innovation is at our core. We harness the power of cutting-edge technologies, delivering best-in-class photorealistic CGIs, animations, and <br />immersive virtual reality experiences. This empowers our clients to not only match but surpass the competition.
      </div>
    </div>
  );
}
