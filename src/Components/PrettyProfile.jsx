import { Data } from "../Schemas/Data";
// (framer-motion removed for zero-dependency build)

// ⚠️ Demo-only icons (Boxicons)
// In a real app, put this <link> in index.html <head>
const Boxicons = () => (
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
);

// -----------------------------
// Data binding
// -----------------------------
const resolvePublic = (p) => {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p; // absolute url
  const cleaned = p.replace(/^\/+/, "");
  return `${process.env.PUBLIC_URL}/${cleaned}`;
};

const profile = {
  name: Data.profile?.name || "",
  occupation: Data.profile?.ocupation || Data.profile?.occupation || "",
  location: Data.profile?.location || "",
  email: Data.profile?.email || "",
  phone: Data.profile?.telephone || "",
  image: resolvePublic(Data.profile?.image),
};

const social = (Data.socialMedia?.social || []).map((s) => ({
  name: s.label || s.name,
  url: s.url,
  icon: s.className || "bx-link",
}));

const skills = {
  tech: Data.skills?.technicalSkills || [],
  soft: Data.skills?.softSkills || [],
};

const education = (Data.experience?.academic || []).map((a) => ({
  title: a.career,
  org: a.institution,
  date: a.date,
}));

const works = (Data.experience?.works || []).map((w) => ({
  title: w.title,
  company: w.company,
  date: w.period,
  bullets: w.description || [],
}));

const projects = (
  Data.experience?.proyects ||
  Data.experience?.projects ||
  []
).map((p) => ({
  name: p.name,
  org: p.company,
  date: p.period,
  bullets: p.description || [],
}));

// -----------------------------
// Small helpers (tweaked sizes)
// -----------------------------
// helpers 위쪽 또는 그 자리에 추가
const Tag = ({ children }) => (
  <span
    className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800
                   text-slate-700 dark:text-slate-300 px-2.5 py-1 text-xs font-medium"
  >
    {children}
  </span>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-28">
    <h2 className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
      {title}
    </h2>
    <div className="mt-4">{children}</div>
  </section>
);

const Card = ({ children, className = "" }) => (
  <div
    className={
      "rounded-2xl border border-slate-200/70 bg-white/80 dark:bg-slate-900/60 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.06)] " +
      className
    }
  >
    {children}
  </div>
);

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-8 lg:px-10">
    {children}
  </div>
);

// -----------------------------
// Main component
// -----------------------------
export default function PrettyProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-200 text-[17px] md:text-[18px]">
      <Boxicons />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 dark:bg-slate-950/50 backdrop-blur supports-[backdrop-filter]:bg-white/40">
        <Container>
          <nav className="flex h-16 items-center justify-between">
            <a href="#home" className="text-base font-semibold tracking-tight">
              {profile.name}
            </a>
            <ul className="hidden md:flex items-center gap-2 text-sm">
              {[
                ["#about", "About"],
                ["#skills", "Skills"],
                ["#experience", "Work"],
                ["#projects", "Projects"],
                ["#education", "Education"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        </div>

        <Container>
          <div className="py-10 sm:py-14">
            <Card className="p-6">
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-36 w-36 rounded-full object-cover ring-4 ring-white/80 shadow-lg"
                />
                <div className="flex-1 min-w-0">
                  <h1 className="text-3xl font-semibold tracking-tight">
                    {profile.name}
                  </h1>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    {profile.occupation}
                  </p>

                  <div className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <i className="bx bx-map" /> {profile.location}
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center gap-2 hover:text-sky-600"
                    >
                      <i className="bx bx-envelope" /> {profile.email}
                    </a>
                    <a
                      href={`tel:${profile.phone}`}
                      className="flex items-center gap-2 hover:text-sky-600"
                    >
                      <i className="bx bx-phone" /> {profile.phone}
                    </a>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {social.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200/70 px-3 py-2 text-sm hover:border-sky-300 hover:bg-sky-50/60 dark:hover:bg-slate-800"
                      >
                        <i className={`bx ${s.icon}`} /> {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <Card className="p-5 sticky top-28">
              <div className="text-sm font-medium text-slate-500">
                Quick Links
              </div>
              <ul className="mt-2 grid gap-1 text-sm">
                {[
                  ["#about", "About Me", "bx-user"],
                  ["#skills", "Skills", "bx-dumbbell"],
                  ["#experience", "Experience", "bx-briefcase"],
                  ["#projects", "Projects", "bx-award"],
                  ["#education", "Education", "bx-book"],
                ].map(([href, label, icon]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <i className={`bx ${icon}`} /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9 space-y-12">
            <Section id="about" title="About Me">
              <Card className="p-5">
                <ul className="grid gap-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                  {(Data.aboutMe?.description || []).map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </Card>
            </Section>

            <Section id="skills" title="Skills">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-5">
                  <div className="text-sm font-medium text-slate-500">
                    Technical
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {skills.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                </Card>
                <Card className="p-5">
                  <div className="text-sm font-medium text-slate-500">Soft</div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {skills.soft.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                </Card>
              </div>
            </Section>

            <Section id="experience" title="Experience">
              <Card className="p-5">
                <ol className="relative border-s-2 border-slate-200 ps-5">
                  {works.map((w, i) => (
                    <li key={w.title + i} className="mb-6 ms-2">
                      <span className="absolute -start-[9px] mt-1 h-4 w-4 rounded-full bg-sky-500" />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-semibold">{w.title}</h3>
                        <span className="text-xs text-slate-500">{w.date}</span>
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {w.company}
                      </div>
                      <ul className="mt-2 list-disc ps-4 text-slate-700 dark:text-slate-300">
                        {w.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </Card>
            </Section>

            <Section id="projects" title="Projects / Teaching">
              <div className="grid gap-5 lg:grid-cols-1 xl:grid-cols-2">
                {projects.map((p) => (
                  <Card key={p.name + p.date} className="p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold text-lg leading-snug break-words">
                        {p.name}
                      </h3>
                      <Tag>{p.date}</Tag>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {p.org}
                    </div>
                    <ul className="mt-3 list-disc ps-5 text-sm text-slate-700 dark:text-slate-300">
                      {p.bullets.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </Section>

            <Section id="education" title="Education">
              <div className="grid gap-4">
                {education.map((e) => (
                  <Card key={e.title + e.date} className="p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="font-medium">{e.title}</div>
                      <span className="text-xs text-slate-500">{e.date}</span>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {e.org}
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section id="contact" title="Contact">
              <Card className="p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/70 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <i className="bx bx-envelope text-xl" /> {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/70 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <i className="bx bx-phone text-xl" /> {profile.phone}
                  </a>
                </div>
              </Card>
            </Section>

            <footer className="pb-12 text-sm text-slate-500">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </footer>
          </main>
        </div>
      </Container>

      {/* Back to top */}
      <a
        href="#home"
        className="fixed bottom-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700"
        aria-label="Back to top"
      >
        <i className="bx bx-up-arrow-alt text-2xl" />
      </a>
    </div>
  );
}
