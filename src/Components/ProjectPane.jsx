import '../styles.css'
import githubLogo from '../github-mark-white.svg';

export default function ProjectPane({ url, title, desc, wiki, image, live}) {
    return <div className='project-container'>
        <div className='project-left-column'>
            <div className={'project-header'}>
                <div className='project-title'>{title}</div>
                {url && wiki ? <div className={'project-links'}><a href={url} className={"ProjectLink"} target="_blank">
                    <img style={{ width: "1em", paddingRight: "0.5em", paddingLeft: "0.2em" }} src={githubLogo}></img></a>
                    <a href={wiki}>Wiki</a></div> : null}
            </div>
            <div className={'project-description'}>
                {desc}
            </div>
        </div>
        <div className={'project-right-column'}>{live? <a href={live} target={"_blank"}><img className={'project-image'} src={image}></img></a>:<img className={'project-image'} src={image}></img>}</div>
    </div>
}

