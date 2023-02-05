import { useSpring, useSpringRef, a, } from '@react-spring/three'
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber';


export const Sphere = ({ start, position, color, index, menuFunction, shouldRise }) => {
    let zPositionOffset
    const [rise, setRise] = useState()
    const springRef = useSpringRef()
    let tempVector = new THREE.Vector3();
    const props = useSpring(
        { yposition: rise ? 1.5 : position[1], color: color, config: { duration: 200 } }
    )

    const sphereRef = useRef();
    useFrame(() => {
        if (typeof zPositionOffset != "number") {
            zPositionOffset = 0
        }
        //zPositionOffset += 0.05
        sphereRef.current.position.z = position[2] + zPositionOffset
        sphereRef.current.getWorldPosition(tempVector);
        if (tempVector.z > 20) {
            console.log('resettings')
            zPositionOffset = -position[2] - 20;
        }
    })

    useEffect(() => {
        setRise(shouldRise)
    }, [shouldRise])

    return (
        <a.mesh
            ref={sphereRef}
            position-x={position[0]}
            position-y={props.yposition}
            //onPointerEnter={()=> {setRise(true)}}
            //onPointerOut={() => {setRise(false)}}
            onPointerDown={() => {menuFunction()}}
            >
            <sphereBufferGeometry attach="geometry"></sphereBufferGeometry>
            <a.meshPhysicalMaterial attach="material" color={props.color}></a.meshPhysicalMaterial>
        </a.mesh>
    )
}