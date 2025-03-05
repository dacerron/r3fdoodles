import { animated } from '@react-spring/three'
import { Sphere } from './Sphere.js'
import React from 'react'
import * as THREE from 'three'
import {SphereContext} from '../App'

const spheres = []
const numSpheres = 5

const sphereColors = ["#ff4dc2", "#8dd16a", "#4dbccd"]
for (let i = 0; i < Math.floor(numSpheres); i++) {
    //let color = new THREE.Color(Math.random(), Math.random(), Math.random());
    let color = new THREE.Color(sphereColors[i]);
    spheres.push({ color: color, position: [-1.3, 0.27, 4 + (-i * 2.75)], key: i, start: false })
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