import { Link } from 'react-router-dom'
import { PRODUCTS } from '../content'

function ProductCard({ p }) {
  return (
    <div className={"product" + (p.stock === 0 ? " sold-out" : "")}>
      {p.img
        ? <img src={p.img} alt={p.name} />
        : <div className="product-ph"><span>{p.name}</span></div>}
      <div className="body">
        <h3>{p.name} <span className="price">${p.price}</span></h3>
        <p>{p.desc}</p>
        <span className="tag">{p.stock > 0 ? `${p.stock} in this week's bake` : p.tag}</span>
      </div>
    </div>
  )
}

export default function Menu() {
  const breads = PRODUCTS.filter(p => p.category === "bread")
  const butters = PRODUCTS.filter(p => p.category === "butter")
  const bundles = PRODUCTS.filter(p => p.category === "bundle")
  return (
    <div className="container">
      <section className="block">
        <div className="kicker">The menu</div>
        <h2 className="title">Everything Donna makes</h2>
        <p className="sub">
          The lineup rotates with the season, the starter's mood, and whatever Sienna and
          Genevieve beg for at dinner. If something says &ldquo;back next bake,&rdquo;
          that's honest — ask and we'll squeeze you in where the oven allows.
        </p>

        <div className="menu-group">
          <h3 className="group-title">Bread</h3>
          <div className="grid-2">
            {breads.map(p => <ProductCard p={p} key={p.id} />)}
          </div>
        </div>

        <div className="menu-group">
          <h3 className="group-title">Cultured butters · 4 oz</h3>
          <div className="grid-2">
            {butters.map(p => <ProductCard p={p} key={p.id} />)}
          </div>
        </div>

        <div className="menu-group">
          <h3 className="group-title">Bundles</h3>
          <div className="grid-2">
            {bundles.map(p => <ProductCard p={p} key={p.id} />)}
          </div>
        </div>

        <p style={{ marginTop: 32 }}><Link to="/order" className="btn btn-primary">Order this week</Link></p>
      </section>
    </div>
  )
}
