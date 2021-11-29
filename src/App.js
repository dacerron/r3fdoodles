import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import { useSpring, useChain, animated } from '@react-spring/three'
import { useControls } from 'leva'
import * as THREE from "three"
import { Controls } from './Components/Controls.js'
import { Plane } from './Components/Plane.js'
import { AnimatedSpheres } from './Components/AnimatedSpheres.js'


function App() {
    const [rise, setRise] = useState(false)
    const { fogMin, fogMax, num } = useControls({ fogMin: 0, fogMax: 30, num: 1 })
    
    return ( <>
    <button type="button" onClick={() => setRise(!rise)}>toggle</button>
    <Canvas camera = {{ position: [0, 0, 5] } }
        onCreated = {
            ({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
                }}>
        <fog attach="fog" args={["white", fogMin, fogMax]}/> 
        <Controls/> 
        <AnimatedSpheres rise={rise}/>
        <Plane/>
        <ambientLight/>
        <directionalLight></directionalLight> 
        </Canvas>
        </>
    );
}

export default App;