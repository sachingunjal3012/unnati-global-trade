import Link from "next/link";
import type { ProductImage } from "@/data/products";
import ProductPhoto from "@/components/ProductPhoto";

export default function ProductCard({slug,name,description,image}:{slug:string,name:string,description:string,image?:ProductImage}) {
 return <article className="card">{image && <ProductPhoto image={image}/>}
 <h3 style={{fontSize:23,margin:"22px 0 8px"}}>{name}</h3><p style={{color:"var(--muted)",lineHeight:1.6}}>{description}</p>
 <div style={{display:"flex",gap:10,marginTop:22}}><Link className="btn btn-light" href={`/products/${slug}`}>View Details</Link><Link className="btn btn-primary" href="/contact">Request Quote</Link></div></article>
}