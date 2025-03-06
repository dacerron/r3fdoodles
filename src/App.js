import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, { useState, useRef } from 'react'
import * as THREE from "three"
import { Controls } from './Components/Controls.js'
import Scene from './Components/Scene.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import ProjectPane from './Components/ProjectPane.jsx'
import "./styles.css"
import closeIcon from './chevron-right.svg'
import faceImage from './cropped-image.png'
import linkedinLogo from './LI-In-Bug.png'
import githubLogo from './github-mark-white.svg';
import NavTab from './Components/NavTab.jsx'

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
    }, function () {
        setPane(true);
        setActivePage([0, 0, 1]);
    }]

    return (<div style={{ width: "100%", height: "100%" }}>
        <Canvas camera={{ position: [5.5, 2, -2] }}
            onCreated={
                ({ gl }) => {
                    gl.shadowMap.enabled = true
                    gl.shadowMap.type = THREE.VSMShadowMap

                }}>
            <SphereContext.Provider value={{ values: activePage }}>
                <Scene menuFunctions={menuFunctions} />
            </SphereContext.Provider>
            <ambientLight />
            <directionalLight></directionalLight>
        </Canvas>
        <div className={"navbar"}  >
            <div className={"name"}> Dante Cerron</div>
            <NavTab menuFunc={menuFunctions[0]} text={"WHAT I DO"} highlighted={activePage[0] == 1}></NavTab>

            <NavTab menuFunc={menuFunctions[1]} text={"WHAT I KNOW"} highlighted={activePage[1] == 1}></NavTab>

            <NavTab menuFunc={menuFunctions[2]} text={"WHAT I'VE MADE"} highlighted={activePage[2] == 1}></NavTab>
        </div>
        <div className={"contact"}><div style={{ paddingBottom: "0.6em" }}>dacerron@gmail.com</div>
            <div style={{ display: "flex", justifyContent: "space-around" }}><a href="https://linkedin.com/in/dante-cerron-8b2138115
"><img src={linkedinLogo} style={{ height: "3em" }}></img></a>
                <a href="https://github.com/dacerron"><img src={githubLogo} style={{ height: "3em" }}></img></a></div></div>
        <div className={"madeWith"}><em> Background made with <a href="https://github.com/pmndrs/react-three-fiber">react three fiber</a></em></div>
        <div className={(pane ? "infoPaneContainerExpanded" : "infoPaneContainer")} >
            <img src={closeIcon} style={{ width: "6em", position: 'absolute', fill: 'aliceblue', paddingTop: '1em' }} onClick={() => { setPane(false) }}></img>
            {activePage[0] ? <div className={"paneContainer"}>
                <div className={"infoRow"}>Build, document, and maintain complex codebases</div>
                <div className={"infoRow"}>Collaborate with designers to build dynamic user interfaces</div>
                <div className={"infoRow"}>Interface with stakeholders to align goals</div>
                <div className={"infoRow"}>Manage deployment pipelines and administrate servers</div>
            </div> : null}
            {activePage[1] ? <div className='techPaneContainer'>
                <div className='paneLeftColumn'>
                    I am familiar both front end and back-end technologies. With my degree and years of experience I have applied
                    a variety of technologies to prototype quickly, and to build robust user experiences
                </div>
                <div className={"paneRightColumn"}>
                    <div className={"logoContainer"}>
                        <img src={linkedinLogo} style={{gridColumn: '1 / span 1', gridRow: '1 / span 1', width: '5em' }}></img>
                        <img src={linkedinLogo} style={{gridColumn: '3 / span 1', gridRow: '1 / span 1', width: '5em' }}></img>
                        <img src={linkedinLogo} style={{gridColumn: '2 / span 1', gridRow: '2 / span 1', width: '5em' }}></img>
                        <img src={linkedinLogo} style={{gridColumn: '1 / span 1', gridRow: '3 / span 1', width: '5em' }}></img>
                    </div>
                    <span>logos by <a href="www.flaticon.com"></a>Flaticon - Freepik</span>
                </div>
            </div> : null}
            {activePage[2] ? <div className={"projectsPane infoPane"}>
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
                    wiki="https://wiki.ubc.ca/Documentation:Pterygopalatine_Fossa_VR"></ProjectPane></div> : null}

        </div>
    </div>
    );
}
//close pane: onPointerLeave={() => {(activePage[0] || activePage[1] || activePage[2]) && setActivePage([0,0,0]) }}
export { App, SphereContext };