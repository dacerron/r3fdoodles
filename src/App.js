import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, { useState, useRef } from 'react'
import * as THREE from "three"
import { Controls } from './Components/Controls.js'
import Scene from './Components/Scene.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import ProjectPane from './Components/ProjectPane.jsx'
import "./styles.css"
import closeIcon from './forward-svgrepo-com.svg'
import faceImage from './cropped-image.png'
import linkedinLogo from './LI-In-Bug.png'
import githubLogo from './github-mark-white.svg';

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
           <div className={"name"}> Dante Cerron</div>
            <About menuFunc={menuFunctions[1]}></About>
            
            <Projects menuFunc={menuFunctions[0]}></Projects>
        </div>
        <div className={"contact"}><div style={{paddingBottom: "0.6em"}}>dacerron@gmail.com</div>
        <div style={{display:"flex", justifyContent: "space-around"}}><a href="www.linkedin.com/in/dante-cerron-8b2138115
"><img src={linkedinLogo} style={{height: "3em"}}></img></a>
        <a href="https://github.com/dacerron"><img src={githubLogo} style={{height: "3em"}}></img></a></div></div>
        <div className={"madeWith"}><em> Background made with <a href="https://github.com/pmndrs/react-three-fiber">react three fiber</a></em></div>
        <div className={(pane? "infoPaneContainerExpanded" : "infoPaneContainer")} >
            <img src={closeIcon} style={{width: "3em"}}onClick={() => {setPane(false)}}></img>
                {activePage[0]? <div className={"projectsPane infoPane"}>
                <ProjectPane url="https://github.com/ubcemergingmedialab/3DMetabolism-Unity" title="3D Metabolism" 
                desc="Unity project that visualizes metabolic networks for teaching biochemistry. Has a UI system built for animating parts of the network in repeatable fashion. Integrates with
                a wikibase information store to allow for data contributions from subject matter experts without coding experience." 
                wiki="https://wiki.ubc.ca/Documentation:Metabolism"></ProjectPane>
                <ProjectPane url="https://github.com/ubcemergingmedialab/MootCourt" title="Moot Court" 
                desc="React three fiber project for helping first year law students practice for moots. Makes use of speech synthesis and AI generated animations to teach mooting cues. Development centred
                around realistic mooting questions and allowing students to input their own questions for the judge to utter." 
                wiki="https://wiki.ubc.ca/Documentation:Moot_Court"></ProjectPane>
                <ProjectPane url="https://github.com/ubcemergingmedialab/FossaFinder" title="Fossa Finder" 
                desc="Unity Project that visualises the Pterygopalatine Fossa for teaching human anatomy. Animation system from 3D Metabolism originally developed for this project. This system allows for easy sequencing
                and editing of animations. Significant effort was put to providing students with views of the Fossa that make sense as the space is so small. Animations also had to be tightly controlled for the same reason."
                wiki="https://wiki.ubc.ca/Documentation:Pterygopalatine_Fossa_VR"></ProjectPane></div>: null}
                {activePage[1]? <div className={"aboutPane infoPane"}><img style={{display: "block", width: "8em", marginLeft: "auto", marginRight: "auto"}} src={faceImage}></img><br></br>I believe user interface design is a powerful tool. With a Bachelor's degree in Computer Science, I have focused my career around developing skills in computer graphics and
                user centred design. Previously I have worked at the Hackspace for Innovation in Visualization and Education <a href="https://hive.med.ubc.ca/">(HIVE)</a> in UBC Faculty of Medicine, the UBC Emerging Media Lab <a href="https://eml.ubc.ca/">(EML)</a> and the Community Engaged Documentation and Research
                <a href="https://www.instagram.com/cedarspaceubc/?hl=en">(CEDaR)</a> Space at UBC. After learning what I can about the project cycle, Scrum and rapid prototyping while learning new technologies with each project, I am ready to break into industry work.</div>: null}
        </div>
    </div>
    );
}
//close pane: onPointerLeave={() => {(activePage[0] || activePage[1] || activePage[2]) && setActivePage([0,0,0]) }}
export {App, SphereContext};