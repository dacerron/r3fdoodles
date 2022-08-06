import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

extend({ OrbitControls })

export const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame((delta, state) => {
    orbitRef.current.update();
  })
  return (
    <orbitControls
      maxPolarAngle={Math.PI}
      minPolarAngle={Math.PI / 5}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  )
}