import type { ReactNode } from "react";

type SepStyle = "wave" | "curve" | "none";
type Tone = "dark" | "light";

function Separator({ flip }: { flip?: boolean }) {
  return (
    <svg
      className={`block w-full ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,64 C240,120 480,0 720,48 C960,96 1200,120 1440,40 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SectionBlock({
  id,
  title,
  subtitle,
  children,
  tone = "dark",
  topSep = "none",
  bottomSep = "none",
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  tone?: Tone;
  topSep?: SepStyle;
  bottomSep?: SepStyle;
}) {
  const isDark = tone === "dark";

  return (
    <section id={id} className={`${isDark ? "bg-slate-950" : "bg-white"} relative`}>
      {/* Top separator */}
      {topSep !== "none" ? (
        <div className={`${isDark ? "text-white" : "text-slate-950"}`}>
          <Separator />
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title ? (
              <h2 className={`text-3xl sm:text-4xl font-semibold tracking-tight ${isDark ? "text-white" : "text-slate-950"}`}>
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className={`mt-3 text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {subtitle}
              </p>
            ) : null}
          </div>
        )}

        {children}
      </div>

      {/* Bottom separator */}
      {bottomSep !== "none" ? (
        <div className={`${isDark ? "text-white" : "text-slate-950"}`}>
          <Separator flip />
        </div>
      ) : null}
    </section>
  );
}
