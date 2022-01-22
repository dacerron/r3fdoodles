import { useSpring, useSpringRef, a } from '@react-spring/three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber';

export const Sphere = ({start, position, color, index}) => {
    const [rise, setRise] = useState(false)
    const springRef = useSpringRef()

    const props = useSpring(
         {yposition: rise?  2.5 :  position[1], color: color, config: {duration: 200}}
    )

    let zPositionOffset = 0;

    const sphereRef = useRef();
    useFrame(() => {
        if(Math.floor(start) === index){
            setRise(true)
        } 
        zPositionOffset += 0.01
        sphereRef.current.position.z = position[2] + zPositionOffset
    })
    useEffect(() => {
        if(rise === true) {
            setTimeout(() => {
                setRise(false)
            }, 500)
        }
    }, [rise])

    return (
        <a.mesh
        ref={sphereRef}
        position-x={position[0]}
        position-y={props.yposition}
        position-z={position[2]}>
            <sphereBufferGeometry attach="geometry"></sphereBufferGeometry>
            <a.meshPhysicalMaterial attach="material" color={props.color}></a.meshPhysicalMaterial>
        </a.mesh>
    )
}