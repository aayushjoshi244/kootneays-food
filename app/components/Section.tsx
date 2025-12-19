import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
  titleClass = "text-slate-900",
  subtitleClass = "text-slate-600",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  titleClass?: string;
  subtitleClass?: string;
}) {
  return (
    <section id={id} className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className={`text-3xl font-semibold tracking-tight ${titleClass}`}>
            {title}
          </h2>
          {subtitle ? (
            <p className={`mt-2 ${subtitleClass}`}>{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
