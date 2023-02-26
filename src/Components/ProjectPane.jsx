import '../styles.css'
import githubLogo from '../github-mark-white.svg';

export default function ProjectPane({ url, title, desc, wiki }) {
    return <p style={{paddingBottom: "1em" }}>{title}<br></br>
        <a href={url} className={"ProjectLink"} target="_blank"><img style={{width: "1em", paddingRight: "0.5em", paddingLeft: "0.2em"}} src={githubLogo}></img></a><a href={wiki}>Wiki</a> <br></br>
        {desc}<br></br>
    </p>
}

