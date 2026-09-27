import { Link } from 'react-router-dom'

export default function PageHeader({ title, accent, text, crumb }) {
  return (
    <section className="page-header">
      <div className="container center">
        <p className="crumbs"><Link to="/">Home</Link> <span>/</span> {crumb}</p>
        <h1>{title} {accent && <span className="accent">{accent}</span>}</h1>
        {text && <p className="muted page-header__text">{text}</p>}
      </div>
    </section>
  )
}
