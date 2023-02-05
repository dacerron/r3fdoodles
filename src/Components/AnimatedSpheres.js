import { animated } from '@react-spring/three'
import { Sphere } from './Sphere.js'
import React from 'react'
import * as THREE from 'three'
import {SphereContext} from '../App'

const spheres = []
const numSpheres = 5
for (let i = 0; i < Math.floor(numSpheres); i++) {
    let color = new THREE.Color(Math.random(), Math.random(), Math.random());
    spheres.push({ color: color, position: [-1.5, 0.5, 4 + (-i * 4)], key: i, start: false })
}
const AnimatedSphere = animated(Sphere)
export const AnimatedSpheres = ({ menuFunctions }) => {
    const riseValues = React.useContext(SphereContext);
    console.log(riseValues);
    return (menuFunctions?<>
        {spheres.map((sphere, index) => {
            return index < menuFunctions.length? <AnimatedSphere color={sphere.color} key={sphere.key} position={sphere.position} index={index} menuFunction={menuFunctions[index]} shouldRise={riseValues.values[index]}></AnimatedSphere> : null
        })}
    </> : null)
}