export const Menu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="container-max flex items-center justify-between py-3">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Jaeoh Lee
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {menu.map((m) => (
            <li key={m.section}>
              <a
                href={m.section}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700"
              >
                <i className={`bx ${m.className} text-base`} />
                <span>{m.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open Menu"
        >
          <i className="bx bx-menu text-xl" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="container-max grid gap-1 py-2">
            {menu.map((m) => (
              <li key={m.section}>
                <a
                  href={m.section}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  <i className={`bx ${m.className} text-base`} />
                  <span>{m.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
