import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-slate-950 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Kiera Transportation Ltd.
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-700">
          <Link
            href="#services"
            className="text-slate-300 transition-colors duration-200 hover:text-white"
          >
            Services
          </Link>

          <Link
            href="#about"
            className="text-slate-300 transition-colors duration-200 hover:text-white"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="text-slate-300 transition-colors duration-200 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
