export default function Footer() {
  return (
    <footer className="border-t border-rule py-6 px-6">
      <div className="max-w-site mx-auto flex flex-col items-center text-center space-y-1">
        <span className="font-mono text-xs text-ink-faint">Designed &amp; built by</span>

        <a
          href="https://amithasannurnabi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block font-sans font-medium text-base md:text-lg text-ink transition-colors hover:text-accent-red"
        >
          Amit Hasan NurNabi
          <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-accent-red transition-transform duration-300 group-hover:scale-x-100" />
        </a>

        <span className="font-mono text-xs text-ink-faint">
          Intelligent Systems &amp; Web Solutions
        </span>
      </div>
    </footer>
  )
}
