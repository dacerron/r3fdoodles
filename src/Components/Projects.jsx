import "./projects.css"

function Projects({menuFunc}){
    return (<>
    <div className={"projectsTab"} onPointerEnter={menuFunc} onPointerLeave={menuFunc}><h1>Projects</h1></div>
    </>)
}

export default Projects