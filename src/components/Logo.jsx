export default function Logo({ light = false }) {
  return (
    <a href="#top" className={`logo ${light ? 'logo--light' : ''}`} aria-label="CONTX home">
      <svg width="30" height="26" viewBox="0 0 30 26" aria-hidden="true">
        <path d="M0 0h11l8 13-8 13H0z" fill="currentColor" />
        <path d="M17 0h13l-8 13 8 13H17l8-13z" fill="#F26B1D" />
      </svg>
      <span>CONTX<b>.</b></span>
    </a>
  )
}
