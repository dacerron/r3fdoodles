import { extend, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { Sphere } from './Sphere.js'
import * as THREE from 'three'

const spheres = []
const numSpheres = 10
for (let i = 0; i < Math.floor(numSpheres); i++) {
    let color = new THREE.Color(Math.random(), Math.random(), Math.random());
    spheres.push({ color: color, position: [-1.5, 0.5, -2 * i], key: i, start: false })
}
const AnimatedSphere = animated(Sphere)
export const AnimatedSpheres = ({rise}) => {
    const { sphereShouldRise } = useSpring( {sphereShouldRise: rise? spheres.length : -1, config: {duration: 1000} })

    return (<>
        {spheres.map((sphere, index) => {
                return <AnimatedSphere start={sphereShouldRise} color={sphere.color} key={sphere.key} position={sphere.position} index={index}></AnimatedSphere>
        })}
    </>)
}