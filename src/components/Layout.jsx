import { useState, useEffect } from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: "/menu", label: "Menu" },
  { to: "/culture", label: "Culture" },
  { to: "/about", label: "About Donna" },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => { setOpen(false) }, [loc.pathname])

  return (
    <>
      <header className="site-nav">
        <div className="nav-inner">
          <Link to="/" className="logo">BRED <span className="amp">&amp;</span> BUTTA</Link>

          <button
            className={"burger" + (open ? " open" : "")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>

          <nav className={open ? "open" : ""}>
            <ul>
              {LINKS.map(l => (
                <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
              ))}
              <li><NavLink to="/order" className="order-btn">Order this week</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site">
        <div className="container">
          <div className="cols">
            <div>
              <img src="/assets/logo-bone.png" alt="Bred & Butta" className="footer-logo" />
              <p>Small-batch sourdough and hand-churned cultured butter, baked by Donna in a home kitchen and delivered by Terry. Friends first, loaves second.</p>
            </div>
            <div>
              <h4>The shop</h4>
              <Link to="/menu">Menu</Link>
              <Link to="/order">Order</Link>
              <Link to="/culture">Culture</Link>
              <Link to="/about">About Donna</Link>
            </div>
            <div>
              <h4>Get in touch</h4>
              <p>hello@bredandbutta.store</p>
              <p>Bakes Fridays · Delivers Saturdays</p>
              <p>Order cutoff: Thursday 8pm</p>
            </div>
          </div>
          <div className="fine">
            <span>© {new Date().getFullYear()} Bred &amp; Butta · baked fresh, never frozen</span>
            <span>bredandbutta.store</span>
          </div>
        </div>
      </footer>
    </>
  )
}
