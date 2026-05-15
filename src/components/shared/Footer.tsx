import { Link } from 'react-router-dom'
import { footerNav } from '@/data/navigation'

const columns = [
  { heading: 'Product', links: footerNav.product },
  { heading: 'Legal', links: footerNav.legal },
  { heading: 'Contact', links: footerNav.contact },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-32">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-5">
            <Link
              to="/"
              className="text-white font-bold tracking-[0.22em] text-sm uppercase block"
            >
              EdgePro
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Premium trading execution tools built around clarity, discipline, and directional structure.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-6">
                {col.heading}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/40 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20 tracking-wide">
            © 2026 EdgePro. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20 text-center tracking-wide">
            DART is a technical analysis tool, not financial advice.{' '}
            <Link to="/terms" className="hover:text-white/40 transition-colors underline underline-offset-2">
              Risk Disclosure
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
