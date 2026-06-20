export default function WaveDivider({ flip = false, color = '#f8fafc' }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-16"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
