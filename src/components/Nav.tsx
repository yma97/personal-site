"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/travel", label: "Travel" },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-[720px] lg:max-w-[900px] mx-auto px-6 lg:px-8 py-4 lg:py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="font-serif font-medium text-xl lg:text-2xl"
          style={{ letterSpacing: "0.08em" }}
        >
          YOUR_NAME
        </Link>

        {/* Mobile: horizontal scroll row below name; Desktop: inline with name */}
        <ul className="flex gap-6 overflow-x-auto list-none m-0 p-0 pb-0.5">
          {links.map(({ href, label }) => (
            <li key={href} className="shrink-0">
              <Link
                href={href}
                className="text-sm lg:text-base tracking-wide transition-colors duration-200"
                style={
                  pathname === href
                    ? {
                        color: "var(--accent)",
                        borderBottom: "1px solid var(--accent)",
                        paddingBottom: "2px",
                      }
                    : { color: "var(--text-muted)" }
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
