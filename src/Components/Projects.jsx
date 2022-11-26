import "./projects.css"

function Projects({menuFunc}){
    return (<>
    <div className={"projectsTab navTab"} onPointerEnter={() => {console.log('projects enter');menuFunc()}}>Projects</div>
    </>)
}

export default Projects