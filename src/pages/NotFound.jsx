import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-header">
      <div className="container center">
        <h1>Page <span className="accent">not found</span></h1>
        <p className="muted page-header__text">The page you are looking for has shipped elsewhere.</p>
        <Link to="/" className="btn btn--primary">Back to home</Link>
      </div>
    </section>
  )
}
