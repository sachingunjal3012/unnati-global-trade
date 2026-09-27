export default function ServiceCard({title,description}:{title:string,description:string}) {
 return <article className="card"><div style={{fontSize:12,color:"var(--tech)",fontWeight:800,letterSpacing:".08em"}}>TECHNOLOGY</div><h3 style={{fontSize:21,margin:"15px 0 8px"}}>{title}</h3><p style={{color:"var(--muted)",lineHeight:1.6}}>{description}</p></article>
}