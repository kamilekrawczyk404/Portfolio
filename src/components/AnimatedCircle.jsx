<figure className="relative progress inline-block">
  <svg
    id="progress"
    width="50%"
    height="50%"
    viewBox="0 0 100 100"
    className={"-rotate-90"}
    strokeWidth={".5rem"}
  >
    <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-gray-900" />
    <motion.circle
      cx="50"
      cy="50"
      r="30"
      pathLength="1"
      className="indicator"
      style={{ pathLength }}
    />
  </svg>
</figure>;
