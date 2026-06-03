export default function About() {
  return (
    <div className="pt-12 lg:pt-24">
      <h1
        className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl mb-6"
        style={{ letterSpacing: "0.04em" }}
      >
        About
      </h1>
      <p className="text-xl lg:text-2xl italic" style={{ color: "var(--text-muted)" }}>
        who I am, what I carry
      </p>
    </div>
  )
}
