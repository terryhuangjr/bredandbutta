import { useState } from 'react'
import { PRODUCTS, WEEK } from '../content'

export default function Order() {
  const [cart, setCart] = useState({})
  const [placed, setPlaced] = useState(false)

  const setQty = (id, qty, max) =>
    setCart(c => ({ ...c, [id]: Math.max(0, Math.min(max, qty)) }))

  const items = PRODUCTS.filter(p => (cart[p.id] || 0) > 0)
  const subtotal = items.reduce((s, p) => s + p.price * cart[p.id], 0)
  const delivery = subtotal > 0 ? 0 : 0 // local delivery, free for now
  const count = items.reduce((s, p) => s + cart[p.id], 0)

  // the butter upsell: bread in basket, no butter yet
  const hasBread = items.some(p => p.category === "bread")
  const hasButter = items.some(p => p.category === "butter" || p.category === "bundle")
  const suggestButter = hasBread && !hasButter
  const topButter = PRODUCTS.find(p => p.category === "butter" && p.stock > 0)

  if (placed) {
    return (
      <div className="container">
        <section className="block" style={{ textAlign: 'center', padding: '96px 0' }}>
          <h2 className="title">Order noted! 🍞</h2>
          <p className="sub" style={{ margin: '0 auto' }}>
            This is the demo checkout — no payment taken yet. When Stripe goes live, this
            becomes a real checkout and Donna gets a ping. For now: screenshot this and
            text it to Donna, she'll confirm by Saturday.
          </p>
          <div style={{ maxWidth: 420, margin: '28px auto 0', textAlign: 'left' }}>
            {items.map(p => (
              <div className="summary row" key={p.id} style={{ padding: '10px 0' }}>
                <span>{cart[p.id]} × {p.name}</span><span>${(p.price * cart[p.id]).toFixed(2)}</span>
              </div>
            ))}
            <div className="summary row total"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
          </div>
          <button className="btn btn-ghost" style={{ marginTop: 28 }} onClick={() => { setPlaced(false); setCart({}); }}>
            Build another order
          </button>
        </section>
      </div>
    )
  }

  return (
    <div className="container">
      <section className="block">
        <div className="kicker">{WEEK.label}</div>
        <h2 className="title">Build your Saturday</h2>
        <p className="sub">
          Closes {WEEK.closes}. Everything bakes Friday and gets delivered Saturday.
        </p>

        <div className="order-grid">
          <div>
            {PRODUCTS.map(p => (
              <div className="order-item" key={p.id}>
                <div className="info">
                  <h3>{p.name} <span style={{ fontWeight: 400, fontSize: 15, color: 'var(--stone)' }}>${p.price}</span></h3>
                  <div className="desc">{p.desc}</div>
                  <div className={"stock" + (p.stock <= 3 && p.stock > 0 ? " low" : "")}>
                    {p.stock > 0 ? `${p.stock} of ${p.stockTotal} left in this bake` : "Sold out this week — back next bake"}
                  </div>
                </div>
                <div className="qty">
                  <button onClick={() => setQty(p.id, (cart[p.id] || 0) - 1, p.stock)} aria-label={`less ${p.name}`}>−</button>
                  <span style={{ minWidth: 20, textAlign: 'center', fontWeight: 600 }}>{cart[p.id] || 0}</span>
                  <button onClick={() => setQty(p.id, (cart[p.id] || 0) + 1, p.stock)} aria-label={`more ${p.name}`} disabled={p.stock === 0}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <h3>Your basket</h3>
            {count === 0 && <p className="note">Nothing yet. The starter is ready, are you?</p>}
            {items.map(p => (
              <div className="row" key={p.id}>
                <span>{cart[p.id]} × {p.name}</span><span>${(p.price * cart[p.id]).toFixed(2)}</span>
              </div>
            ))}
            {suggestButter && topButter && (
              <div className="upsell">
                <div className="upsell-text">Bread without cultured butter is a missed opportunity.</div>
                <button className="upsell-btn" onClick={() => setQty(topButter.id, (cart[topButter.id] || 0) + 1, topButter.stock)}>
                  + Add {topButter.name} · ${topButter.price}
                </button>
              </div>
            )}
            <div className="row"><span>Local delivery (Sat)</span><span>{subtotal ? "Free" : "—"}</span></div>
            <div className="row total"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
            <button className="btn btn-primary" disabled={count === 0} onClick={() => setPlaced(true)}>
              {count === 0 ? "Add a loaf first" : `Place order · ${count} item${count > 1 ? "s" : ""}`}
            </button>
            <p className="note">Demo checkout — payments arrive with Stripe. Orders confirm by text either way.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
