import { extend, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { Sphere } from './Sphere.js'
import React from 'react'
import * as THREE from 'three'
import {SphereContext} from '../App'

const spheres = []
const numSpheres = 5
for (let i = 0; i < Math.floor(numSpheres); i++) {
    let color = new THREE.Color(Math.random(), Math.random(), Math.random());
    spheres.push({ color: color, position: [-1.5, 0.5, i * 4], key: i, start: false })
}
const AnimatedSphere = animated(Sphere)
<<<<<<< HEAD
export const AnimatedSpheres = ({rise}) => {
    const { sphereShouldRise } = useSpring( {sphereShouldRise: rise? spheres.length : -1, config: {duration: 1000} })

    return (<>
=======
export const AnimatedSpheres = ({ menuFunctions }) => {
    const riseValues = React.useContext(SphereContext);
    console.log(riseValues);
    return (menuFunctions?<>
>>>>>>> 99ddd6e66166b29f635db83448096a2ced2b4e25
        {spheres.map((sphere, index) => {
            return index < menuFunctions.length? <AnimatedSphere color={sphere.color} key={sphere.key} position={sphere.position} index={index} menuFunction={menuFunctions[index]} shouldRise={riseValues.values[index]}></AnimatedSphere> : null
        })}
    </> : null)
}