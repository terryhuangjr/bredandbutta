import { Link } from 'react-router-dom'

// PLACEHOLDER photo + story — swap with Donna's real photo and her real words
// the week she bakes her first test batch.
const BAKER_IMG = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80" // SWAP: Donna's real portrait here

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
              <em>[Placeholder bio — replace with Donna's real story.]</em> It started
              the way these things start: a jar of flour and water on the counter, a
              stubborn refusal to buy another loaf of shelf-stable supermarket bread, and
              a starter she named and fed twice a day like a third pet.
            </p>
            <p>
              The first dozen loaves were lopsided. Then they weren't. The difference
              wasn't a recipe — sourdough recipes are lies anyway, because the dough
              tells you what it needs. The difference was patience, a kitchen scale, and
              the stubbornness of someone who decided that if bread takes three days, it
              gets three days.
            </p>
            <div className="pullquote">
              "I'm not selling bread. I'm selling the Saturday morning someone else gets
              to have because I did the three days."
            </div>
            <p>
              Bred &amp; Butta is a home kitchen, one oven, and a batch size that stays
              honest. The butter churns the same philosophy: cream, time, culture, salt.
              Friends first, neighbors second, everyone else when the oven scales.
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
