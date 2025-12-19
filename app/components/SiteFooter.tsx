const PHONE_DISPLAY = "+(639) 916-0335";
const PHONE_TEL = "+6399160335";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">Kiera Transportation Ltd.</div>
            <p className="mt-2 text-sm text-slate-700">
              Delivery services of food-service goods to restaurants and fast-food chains across the
              Kootenays area.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Details</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>Based in Cranbrook, British Columbia</li>
              <li>Partnered with Sysco Canada</li>
              <li>Owner: Premjit Singh Sandhu</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <p className="mt-2 text-sm text-slate-700">
              Phone:{" "}
              <a className="underline underline-offset-4 hover:text-slate-900" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-xs text-slate-600">
          © {year} Kiera Transportation Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
