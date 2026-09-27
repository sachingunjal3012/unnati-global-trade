import Image from "next/image";
import type { ProductImage } from "@/data/products";

export default function ProductPhoto({ image, height = 140 }: { image: ProductImage; height?: number }) {
  return <figure style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(max-width: 800px) 100vw, 50vw"
      style={{ display: "block", width: "auto", height: "auto", maxWidth: "100%", maxHeight: height, objectFit: "contain", borderRadius: 8 }}
    />
    {image.credit && image.source && image.license && image.licenseUrl && <figcaption style={{ marginTop: 6, color: "var(--muted)", fontSize: 11 }}>
      Photo: <a href={image.source} target="_blank" rel="noreferrer">{image.credit}</a>
      {" · "}<a href={image.licenseUrl} target="_blank" rel="noreferrer">{image.license}</a>
    </figcaption>}
  </figure>;
}