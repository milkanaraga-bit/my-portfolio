/** Soft animated orange gradient drifting behind every section, site-wide. */
export function GradientBackdrop() {
  return (
    <>
      <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="cn-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-45"
        style={{ filter: "url(#cn-goo) blur(40px)" }}
      >
        <div className="gradient-blob gradient-blob-1" />
        <div className="gradient-blob gradient-blob-2" />
        <div className="gradient-blob gradient-blob-3" />
        <div className="gradient-blob gradient-blob-4" />
        <div className="gradient-blob gradient-blob-5" />
      </div>
    </>
  );
}
