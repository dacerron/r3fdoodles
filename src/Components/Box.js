import { useRef, useState } from 'react'
import { useSpring, a } from '@react-spring/three'
import { useControls } from 'leva'
import {  useFrame } from '@react-three/fiber'

export const Box = () => {
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