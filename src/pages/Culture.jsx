import { Link } from 'react-router-dom'
import { FACTS, TIMELINE, FAQ, SCIENCE_NOTE } from '../content'

const HERO = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80" // verified

export default function Culture() {
  return (
    <div className="container">
      <section className="block">
        <div className="kicker">Culture</div>
        <h2 className="title">Sourdough 101: why slow bread is easier on you than fast bread</h2>
        <p className="sub">
          "Culture" is doing double duty here. A sourdough starter <em>is</em> a culture —
          wild yeast and lactic acid bacteria living in flour and water, the same family of
          organisms that make yogurt, kimchi and good butter. And cultured means fermented:
          time and microbes doing the work that a packet of instant yeast and a dough
          conditioner can only fake.
        </p>

        <div className="craft-hero">
          <img src={HERO} alt="Crumb shot of a sliced sourdough loaf" />
        </div>

        <div className="fact-row">
          {FACTS.map(f => (
            <div className="fact" key={f.h}>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </div>
          ))}
        </div>

        <p className="science-note">{SCIENCE_NOTE}</p>

        <div className="kicker" style={{ marginTop: 56 }}>The three-day build</div>
        <h2 className="title">What actually happens to a loaf</h2>
        <div className="timeline">
          {TIMELINE.map(s => (
            <div className="stage" key={s.t}>
              <div className="time">{s.t}</div>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        <div className="kicker">Straight answers</div>
        <h2 className="title">Questions people actually ask</h2>
        <div className="faq">
          {FAQ.map(q => (
            <details key={q.q}>
              <summary>{q.q}</summary>
              <div>{q.a}</div>
            </details>
          ))}
        </div>

        <p style={{ marginTop: 36 }}>
          Convinced? <Link to="/order" className="btn btn-primary" style={{ marginLeft: 8 }}>Order this week's bake</Link>
        </p>
      </section>
    </div>
  )
}
