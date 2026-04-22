import heroTeam from "./assets/photos/hero-team.jpg";
import heroCity from "./assets/photos/hero-city.jpg";
import aboutWork from "./assets/photos/about-work.jpg";
import projectDashboard from "./assets/photos/project-dashboard.jpg";
import projectLearning from "./assets/photos/project-learning.jpg";

const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-white/60">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

const Pill = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/75">
      {children}
    </span>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30 selection:text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex justify-between items-center">
            <a
              href="#top"
              className="text-sm font-semibold tracking-tight text-white"
            >
              Yemichael Ayele Abebe
            </a>
            <div className="hidden md:flex items-center gap-7 text-sm text-white/70">
              <a
                href="#about"
                className="transition hover:text-white"
              >
                About
              </a>
              <a
                href="#skills"
                className="transition hover:text-white"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="transition hover:text-white"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="transition hover:text-white"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="transition hover:text-white"
              >
                Contact
              </a>
              <a
                href="https://github.com/yemichael13"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img
            src={heroCity}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950 to-zinc-950" />
          <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/60">
                FULL-STACK DEVELOPER • ADDIS ABABA, ETHIOPIA
              </p>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                I build production-ready web and mobile systems that handle real
                workflows—not just screens.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                I’m <span className="text-white">Yemichael Ayele Abebe</span>. I
                build React frontends, Node/Express backends, and cross-platform
                mobile apps with React Native and Flutter—designed around real
                users, real permissions, and real operational data.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Pill>Multi-role systems</Pill>
                <Pill>JWT authentication</Pill>
                <Pill>REST APIs</Pill>
                <Pill>File upload workflows</Pill>
                <Pill>Business logic & approvals</Pill>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white/90"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={heroTeam}
                  alt="Modern workspace"
                  className="h-[340px] w-full object-cover sm:h-[420px]"
                  loading="eager"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/60">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Full-stack</p>
                  <p className="mt-1">React, Node, Express</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Mobile</p>
                  <p className="mt-1">React Native, Flutter</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Data</p>
                  <p className="mt-1">MySQL, Firestore, SQLite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ABOUT"
            title="I build systems end-to-end—UI, APIs, data, and the rules that keep them consistent."
            subtitle="I started with hands-on internship experience and accelerated through disciplined self-learning. My focus shifted from frontend to full-stack because real products depend on workflows, permissions, data integrity, and reliability—not only visuals."
          />

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-5 text-white/75">
                <p className="text-pretty leading-relaxed">
                  My journey began during my internship at{" "}
                  <span className="text-white">
                    Cooperative Bank of Oromia (Innovation Hub)
                  </span>
                  , where I saw how real teams ship software: clear requirements,
                  shared code, and consistent delivery.
                </p>
                <p className="text-pretty leading-relaxed">
                  I started in frontend, then moved into backend and system
                  design because I wanted to build the parts that decide whether
                  a product holds up in real use—authentication, authorization,
                  data models, file uploads, and business workflows.
                </p>
                <p className="text-pretty leading-relaxed">
                  I build with a problem-solving mindset: understand the process
                  first, then implement clean APIs and predictable state changes
                  so the system stays maintainable as it grows.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Pill>Workflow-driven features</Pill>
                <Pill>System thinking</Pill>
                <Pill>Shipping mindset</Pill>
                <Pill>Maintainable architecture</Pill>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={aboutWork}
                  alt="Workspace"
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="SKILLS"
            title="A stack built for real products."
            subtitle="I work across web, backend, mobile, and data—especially in systems that need role-based access, secure APIs, and consistent workflows."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frontend",
                items: ["React.js", "HTML5", "CSS3", "Responsive UI"],
              },
              {
                title: "Backend",
                items: [
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                  "JWT authentication & authorization",
                  "File upload systems",
                ],
              },
              { title: "Mobile", items: ["React Native", "Flutter"] },
              {
                title: "Database",
                items: ["MySQL", "Firebase Firestore", "SQLite"],
              },
              { title: "Tools", items: ["Git", "GitHub"] },
              { title: "UI/UX", items: ["Figma", "UI/UX fundamentals"] },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h3 className="text-base font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-violet-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="PROJECTS"
            title="Work that reflects real constraints: roles, approvals, integrity, and usability."
            subtitle="These projects focus on systems design and implementation—how users work, how data flows, and how rules are enforced."
          />

          <div className="grid gap-6 lg:grid-cols-12">
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:col-span-7">
              <img
                src={projectDashboard}
                alt="Mini-ERP System"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-white">
                  Mini-ERP System
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  React + Node.js system that centralizes business operations
                  into structured modules and approval workflows.
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Problem it solves
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      Replaces spreadsheet-driven operations with a system that
                      enforces workflow steps, accountability, and traceability
                      across departments.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Key features
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-white/70">
                      {[
                        "Sales, Procurement, and Production modules",
                        "Role-based workflow (Accountant → Manager)",
                        "Receipt upload linked to transactions",
                        "Transaction management and consistent state changes",
                        "Authentication & authorization",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-emerald-400/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Technical challenges
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-white/70">
                      {[
                        "Designing authorization rules that stay maintainable as roles grow",
                        "Building APIs around business actions (not only CRUD)",
                        "Keeping approvals and transaction states consistent across modules",
                        "Integrating file upload workflows without losing auditability",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-violet-400/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Why it stands out
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      It’s not a UI demo. It’s real business logic: approvals,
                      role boundaries, traceable transactions, and workflow
                      consistency across modules—closer to how internal systems
                      work in organizations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>React</Pill>
                  <Pill>Node.js</Pill>
                  <Pill>Express</Pill>
                  <Pill>MySQL</Pill>
                  <Pill>JWT</Pill>
                  <Pill>File uploads</Pill>
                </div>
              </div>
            </article>

            <div className="grid gap-6 lg:col-span-5">
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={projectLearning}
                  alt="EthioKids Learning App"
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-white">
                    EthioKids Learning App
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    React Native + Firebase learning platform designed around
                    roles, reporting, and measurable progress.
                  </p>

                  <p className="mt-5 text-sm font-semibold text-white">
                    Purpose
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Support structured practice for children while giving
                    teachers and parents clear visibility into progress.
                  </p>

                  <p className="mt-5 text-sm font-semibold text-white">
                    Features
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-white/70">
                    {[
                      "Multi-role system (Admin, Teacher, Parent, Child)",
                      "Quiz system (Math & English)",
                      "Score tracking and progress history",
                      "Teacher-generated reports",
                      "Firestore structure designed for role-driven access patterns",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-sky-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm font-semibold text-white">
                    What makes it strong
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    The system is designed for real usability: each role has
                    clear responsibilities, and the data model supports quizzes,
                    attempts, reporting, and growth over time.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Pill>React Native</Pill>
                    <Pill>Firebase</Pill>
                    <Pill>Firestore</Pill>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-semibold text-white">
                  Prime Connect (Internship)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  A team-built platform developed during my internship, where
                  collaboration, backend integration, and delivery discipline
                  mattered as much as UI.
                </p>

                <div className="mt-5 grid gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">My role</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      Contributed to React frontend features, coordinated with
                      teammates to integrate backend endpoints, and supported
                      delivery through debugging and iteration.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Tech used
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Pill>React</Pill>
                      <Pill>Laravel</Pill>
                      <Pill>MySQL</Pill>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      What I learned
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-white/70">
                      {[
                        "Working in shared codebases with reviews and collaboration",
                        "How backend decisions shape frontend data flow",
                        "Shipping incrementally with feedback and timelines",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-amber-400/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-semibold text-white">
                  Additional work
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {[
                    "JWT authentication systems with protected routes and role-aware access",
                    "CRUD apps with validation, error handling, and REST API integration",
                    "Workflow-driven features: file uploads, transaction records, approvals",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Professional context plus hands-on systems work."
            subtitle="I’ve worked in a team environment through internship experience, and I treat personal projects as real engineering: requirements, workflows, data modeling, and iteration."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-white">
                Cooperative Bank of Oromia — Innovation Hub
              </p>
              <p className="mt-2 text-sm text-white/70">Internship</p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Worked in a collaborative setting where product requirements,
                integration with backend services, and consistent delivery were
                essential. This experience strengthened my communication,
                iteration speed, and understanding of production-minded work.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-white">
                Personal projects as real experience
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                I build systems that simulate real environments: multi-role
                access, approval workflows, secure authentication, data
                structures designed for growth, and features that stay reliable
                under changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="DIFFERENTIATORS"
            title="What makes my work stand out."
            subtitle="I focus on systems where requirements and workflows shape the architecture—exactly what you see in real organizations."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "ERP-level business logic",
                body: "I built a Mini-ERP with modules, approval flows, receipts, and role boundaries—work that requires more than UI skills.",
              },
              {
                title: "Workflow-first system thinking",
                body: "I design features around how people operate: responsibilities, state transitions, and data integrity across modules.",
              },
              {
                title: "Full-stack + mobile capability",
                body: "I can ship end-to-end across React web, Node/Express APIs, and cross-platform mobile apps—built to work together as one system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
              >
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="CONTACT"
            title="If you’re hiring for systems work, let’s talk."
            subtitle="If you value developers who can build secure, workflow-driven products—multi-role access, approvals, and data integrity—I’d like to connect."
          />

          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
            <p className="text-sm text-white/70">
              Based in <span className="text-white">Addis Ababa, Ethiopia</span>
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://github.com/yemichael13"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white/90"
              >
                View GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Review projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/55 sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} Yemichael Ayele Abebe</p>
            <p className="text-white/55">
              Full-Stack Developer • Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;