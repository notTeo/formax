/**
 * WobbleDivider
 * Renders a single gentle S-curve SVG wave between two sections.
 * fromColor: background color (section above)
 * toColor:   fill color of the wave (section below)
 * flip:      mirrors the wave vertically
 */
const PATHS = [
  'M0,32 C320,72 1120,0 1440,38 L1440,60 L0,60 Z',
  'M0,42 C400,8 1040,60 1440,28 L1440,60 L0,60 Z',
  'M0,20 C480,58 960,4 1440,44 L1440,60 L0,60 Z',
]

let pathIndex = 0

export default function WobbleDivider({ fromColor, toColor, pathVariant }) {
  const path = PATHS[pathVariant ?? (pathIndex++ % PATHS.length)]

  return (
    <div style={{ background: fromColor, lineHeight: 0, fontSize: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 'clamp(36px, 4vw, 60px)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={toColor} />
      </svg>
    </div>
  )
}
