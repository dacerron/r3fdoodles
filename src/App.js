import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, { useState, useRef } from 'react'
import * as THREE from "three"
import { Controls } from './Components/Controls.js'
import Scene from './Components/Scene.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import "./styles.css"

const SphereContext = React.createContext({ values: null })

function App() {
    const [activePage, setActivePage] = useState([0, 0, 0])
    const menuFunctions = [function () {
        setActivePage([1, 0, 0])
    }, function () {
        setActivePage([0, 1, 0])
    }]
    
    return (<div style={{ width: "100%", height: "100%" }}>
        <Canvas camera={{ position: [5, 5, -2] }}
            onCreated={
                ({ gl }) => {
                    gl.shadowMap.enabled = true
                    gl.shadowMap.type = THREE.VSMShadowMap
                }}>
            <SphereContext.Provider value={{values: activePage}}>
                <Scene menuFunctions={menuFunctions} />
            </SphereContext.Provider>
            <ambientLight />
            <directionalLight></directionalLight>
        </Canvas>
        <div className={"navbar"} onPointerLeave={() => {(activePage[0] || activePage [1] || activePage[2]) && setActivePage([0,0,0]) }} >
            <Projects menuFunc={menuFunctions[1]}></Projects>
            
            <About menuFunc={menuFunctions[0]}></About>
        </div>
    </div>
    );
}

export {App, SphereContext};