import { Link } from 'react-router-dom'

// SWAP: Donna's real portrait — the kitchen, the starter jar somewhere in frame.
const BAKER_IMG = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80"

export default function About() {
  return (
    <div className="container">
      <section className="block">
        <div className="kicker">About the baker</div>
        <h2 className="title">Donna</h2>

        <div className="about-grid">
          <img src={BAKER_IMG} alt="Donna, baker" />
          <div>
            <p>
              Donna is thirty-four, a mother of two girls — Sienna and Genevieve — a wife,
              and the kind of cook who tastes everything twice. Food was always the love.
              Bread became the obsession.
            </p>
            <p>
              It started with a jar of flour and water on the counter. Sourdough won her
              over for the reasons that still keep her at the bench: three honest
              ingredients, a process that can't be rushed, and bread your body actually
              thanks you for. The fermentation is the point — but the therapy is too.
              Folding dough at 10pm after two kids are finally asleep quiets a brain that
              never stops.
            </p>
            <p>
              The starter has a name: <strong>Breadie Smalls</strong>. She feeds it, it
              rises, and every loaf and every churn of butter carries a living piece of it.
              Growing beautiful bread from a jar nobody would look at twice — Donna finds
              that genuinely incredible, even now.
            </p>
            <div className="pullquote">
              "Simple ingredients. Slow time. Something alive doing the work. I just want
              to share what comes out of my oven."
            </div>
            <p>
              Bred &amp; Butta is one home kitchen, one oven, and a batch size that stays
              honest — 8 to 10 loaves a week while the kids are small and the standards
              are high. The butters churn the same philosophy: cream, culture, time, and
              whatever flavor the week calls for. Friends first, neighbors second.
            </p>
            <p>
              <Link to="/order" className="btn btn-primary">Taste what she means</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
