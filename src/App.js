import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import { useState, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useControls } from 'leva'
import * as THREE from "three"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame((delta, state) => {
    orbitRef.current.update();
  })
  return (
    <orbitControls
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  )
}

const Box = () => {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const { xPosition, yPosition, zPosition, boxColor, rotationSpeed } = useControls({ xPosition: 0, yPosition: 0, zPosition: 0, boxColor: "#fff", rotationSpeed:0 })
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
  })
  useFrame(() => {
    meshRef.current.rotation.y += rotationSpeed
  })
  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      position={[xPosition, yPosition, zPosition]}
      castShadow>

      <boxBufferGeometry attach="geometry" args={[1, 1, 1]}></boxBufferGeometry>
      <a.meshPhysicalMaterial attach="material" color={boxColor}></a.meshPhysicalMaterial>
    </a.mesh>
  )
}

const Plane = () => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]}></planeBufferGeometry>
      <meshPhysicalMaterial attach="material" color={"white"}></meshPhysicalMaterial>
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} onCreated={({ gl }) => {
      gl.shadowMap.enabled = true
      gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}>
      <fog attach="fog" args={["white", 5, 15]} />
      <Controls />
      <Box></Box>
      <Plane />

      <ambientLight />
      <spotLight position={[0, 5, 10]} castShadow />
    </Canvas>
  );
}

export default App;
