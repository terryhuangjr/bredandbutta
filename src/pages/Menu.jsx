import { Link } from 'react-router-dom'
import { PRODUCTS } from '../content'

export default function Menu() {
  return (
    <div className="container">
      <section className="block">
        <div className="kicker">The menu</div>
        <h2 className="title">Everything Donna makes</h2>
        <p className="sub">
          The lineup rotates with the season and the starter's mood. If something says
          "back next week," that's honest — ask and we'll squeeze you in where the oven allows.
        </p>
        <div className="grid-2">
          {PRODUCTS.map(p => (
            <div className="product" key={p.id}>
              <img src={p.img} alt={p.name} />
              <div className="body">
                <h3>{p.name} <span className="price">${p.price}</span></h3>
                <p>{p.desc}</p>
                <span className="tag">{p.stock > 0 ? `${p.stock} in this week's bake` : p.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 32 }}><Link to="/order" className="btn btn-primary">Order this week</Link></p>
      </section>
    </div>
  )
}
