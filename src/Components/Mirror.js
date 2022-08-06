import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Box } from '@react-three/drei'

function Mirror({ sideMaterial, reflectionMaterial, args, ...props }) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.001
    ref.current.rotation.z += 0.01
  })
  
  return (
    <Box {...props} 
      ref={ref} 
      args={args}
      material={[
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        reflectionMaterial
      ]}
    />
  )
}

export default Mirror