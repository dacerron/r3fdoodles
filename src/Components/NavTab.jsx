import "../styles.css"

function NavTab({menuFunc, text, highlighted}){
    return (<>
    <div className={highlighted? "navTabSelected":"navTab"} onPointerDown={() => {console.log('projects enter');menuFunc()}}>{text}</div>
    </>)
}

export default NavTab