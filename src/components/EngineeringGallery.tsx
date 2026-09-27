import Image from "next/image";

const engineeringAreas = [
  {
    title: "Software Engineering",
    description: "Collaborative application development and modernization.",
    src: "/services/software-engineering.jpg",
    alt: "Developers reviewing code together on a large screen.",
    photographer: "Mikhail Nilov",
    source: "https://www.pexels.com/photo/men-looking-at-the-code-on-the-board-7988747/"
  },
  {
    title: "Cloud Infrastructure",
    description: "Cloud platforms, containers, and Kubernetes deployments.",
    src: "/services/cloud-infrastructure.jpg",
    alt: "An engineer monitoring server racks in a data center.",
    photographer: "Divine Techy Girl",
    source: "https://www.pexels.com/photo/software-engineer-standing-beside-server-racks-1181354/"
  },
  {
    title: "AI Engineering",
    description: "Generative AI, retrieval-augmented systems, and automation.",
    src: "/services/ai-engineering.jpg",
    alt: "AI-assisted code debugging displayed on a computer screen.",
    photographer: "Dkomov",
    source: "https://www.pexels.com/photo/ai-assisted-code-debugging-on-screen-display-34804018/"
  }
];

export default function EngineeringGallery() {
  return <section className="section" style={{ background: "#f0f4f4" }}>
    <div className="container">
      <div className="eyebrow" style={{ color: "var(--tech)" }}>Engineering in Practice</div>
      <h2 style={{ fontSize: 38, maxWidth: 760 }}>Applications, infrastructure, and intelligent systems</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24, marginTop: 28 }}>
        {engineeringAreas.map(area => <figure key={area.title} style={{ margin: 0 }}>
          <Image
            src={area.src}
            alt={area.alt}
            width={1200}
            height={800}
            priority={area.title === "Software Engineering"}
            sizes="(max-width: 800px) 100vw, 33vw"
            style={{ width: "100%", height: "clamp(140px, 16vw, 180px)", objectFit: "contain", borderRadius: 8, background: "#fff" }}
          />
          <figcaption>
            <h3 style={{ fontSize: 21, margin: "15px 0 6px" }}>{area.title}</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{area.description}</p>
            <small style={{ display: "block", marginTop: 8, color: "var(--muted)" }}>
              Photo: <a href={area.source} target="_blank" rel="noreferrer">{area.photographer} / Pexels</a>
            </small>
          </figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}