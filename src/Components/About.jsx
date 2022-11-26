import "./about.css"

function About({menuFunc}){
    return (<>
    <div className={"aboutTab navTab"} onPointerEnter={() => {console.log('about enter');menuFunc()}}>About</div>
    </>)
}

export default About