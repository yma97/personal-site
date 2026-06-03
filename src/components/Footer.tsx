export default function Footer() {
  return (
    <footer className="py-10 text-center" style={{ color: "var(--text-muted)" }}>
      <p className="text-sm tracking-widest">
        YOUR_NAME · {new Date().getFullYear()} · made with care
      </p>
    </footer>
  )
}
