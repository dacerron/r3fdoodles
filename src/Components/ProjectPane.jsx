import '../styles.css'

export default function ProjectPane({url, title, desc, wiki}) {
    return <p>{title}<br></br><a href={url} class={"ProjectLink"} target="_blank"><img src="/github-mark-white.svg"></img></a> <a href={wiki} style={{ fontWeight: 400}}>Wiki</a> <br></br> <p>{desc}</p><br></br>
    </p>
}

