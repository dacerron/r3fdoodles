import "./about.css"

function About({menuFunc}){
    return (<>
    <div className={"aboutTab"} onPointerEnter={menuFunc} onPointerLeave={menuFunc}><h1>About</h1></div>
    </>)
}

export default About