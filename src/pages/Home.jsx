import { Link } from 'react-router-dom'
import { WEEK, STEPS, FACTS, PRODUCTS } from '../content'

const HERO_IMG = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80"

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div>
          <img src="/assets/logo-crust.png" alt="Bred & Butta logo" className="hero-logo" />
          <h1>Bread that takes <em>three days</em>, so your Saturday takes zero effort.</h1>
          <p className="lede">
            Donna bakes 8–10 loaves a week of slow-fermented sourdough and hand-churns
            cultured butter in the same batch-sized obsession. When the week's bake sells
            out, that's the oven being honest.
          </p>
          <div className="cta-row">
            <Link to="/order" className="btn btn-primary">Order this week's bake</Link>
            <Link to="/culture" className="btn btn-ghost">Why sourdough?</Link>
          </div>
        </div>
        <div className="hero-img">
          <img src={HERO_IMG} alt="A freshly baked sourdough loaf" />
        </div>
      </section>

      <div className="week-card">
        <div>
          <h3>{WEEK.label}</h3>
          <p className="meta">
            Bake day: {WEEK.date} · Closes {WEEK.closes} · Local delivery Saturday
          </p>
        </div>
        <div className="loaves-left">
          <div className="big">{WEEK.loavesLeft}</div>
          <div className="small">loaves left of {WEEK.loavesTotal}</div>
        </div>
      </div>

      <section className="block">
        <div className="kicker">How it works</div>
        <h2 className="title">Slow bread, simple ordering</h2>
        <div className="steps">
          {STEPS.map(s => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="kicker">This week's board</div>
        <h2 className="title">What's in the oven</h2>
        <div className="grid-2">
          {PRODUCTS.filter(p => p.img).slice(0, 2).map(p => (
            <div className="product" key={p.id}>
              <img src={p.img} alt={p.name} />
              <div className="body">
                <h3>{p.name} <span className="price">${p.price}</span></h3>
                <p>{p.desc}</p>
                <span className="tag">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}><Link to="/menu" className="btn btn-ghost">See the full menu →</Link></p>
      </section>

      <section className="block">
        <div className="kicker">Why it matters</div>
        <h2 className="title">Real fermentation isn't a trend</h2>
        <div className="fact-row">
          {FACTS.slice(0, 3).map(f => (
            <div className="fact" key={f.h}>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}><Link to="/culture" className="btn btn-ghost">Read the whole case →</Link></p>
      </section>
    </div>
  )
}
