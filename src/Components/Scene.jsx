import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

import { AnimatedSpheres } from './AnimatedSpheres'
import { Plane } from './Plane'

function Scene( {menuFunctions}) {
    const group = useRef();
    const rotationEuler = new THREE.Euler(0, 0, 0);
    const rotationQuaternion = new THREE.Quaternion(0, 0, 0, 0);
    const { viewport } = useThree();

    useFrame(({ mouse }) => {
        const x = (mouse.x * viewport.width) / 100;
        const y = (mouse.y * viewport.height) / 100;

        rotationEuler.set(y, x + Math.PI, 0);
        rotationQuaternion.setFromEuler(rotationEuler);

        group.current.quaternion.slerp(rotationQuaternion, 0.1);
    });
    return <group ref={group} position={[-2,0,2]} rotation={[0, Math.PI/2, 0]}>
        <pointLight position={[15, 15, 15]} />
        <AnimatedSpheres menuFunctions={menuFunctions} />
        <Plane />
    </group>
}

export default Scene;