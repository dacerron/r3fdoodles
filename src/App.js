import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, { useState, useRef } from 'react'
import * as THREE from "three"
import { Controls } from './Components/Controls.js'
import Scene from './Components/Scene.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import ProjectPane from './Components/ProjectPane.jsx'
import "./styles.css"

const SphereContext = React.createContext({ values: null })

function App() {
    const [activePage, setActivePage] = useState([0, 0, 0])
    const [pane, setPane] = useState(false);
    const menuFunctions = [function () {
        setPane(true);
        setActivePage([1, 0, 0])
    }, function () {
        setPane(true);
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
        <div className={"navbar"}  >
            <Projects menuFunc={menuFunctions[0]}></Projects>
            
            <About menuFunc={menuFunctions[1]}></About>
        </div>
        <div className={(pane? "infoPaneContainerExpanded" : "infoPaneContainer")} >
                {activePage[0]? <div className={"projectsPane infoPane"}>
                <ProjectPane url="https://github.com/ubcemergingmedialab/3DMetabolism-Unity" title="3D Metabolism" 
                desc="Unity project that visualizes metabolic networks for teaching biochemistry." 
                wiki="https://wiki.ubc.ca/Documentation:Metabolism"></ProjectPane>
                <ProjectPane url="https://github.com/ubcemergingmedialab/MootCourt" title="Moot Court" 
                desc="React three fiber project for helping first year law students practice for moots." 
                wiki="https://wiki.ubc.ca/Documentation:Moot_Court"></ProjectPane>
                <ProjectPane url="https://github.com/ubcemergingmedialab/FossaFinder" title="Fossa Finder" 
                desc="Unity Project that visuales the Pterygopalatine Fossa for teaching human anatomy."
                wiki="https://wiki.ubc.ca/Documentation:Pterygopalatine_Fossa_VR"></ProjectPane></div>: null}
                {activePage[1]? <div className={"aboutPane infoPane"}>some info about me</div>: null}
        </div>
    </div>
    );
}
//close pane: onPointerLeave={() => {(activePage[0] || activePage[1] || activePage[2]) && setActivePage([0,0,0]) }}
export {App, SphereContext};