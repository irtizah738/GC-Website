import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const groups = [
  {
    title: 'Products',
    links: [
      ['GC-ERP', '/systems#erp-systems'],
      ['G-HIMS', '/systems#hmis-healthcare'],
      ['Enterprise platforms', '/systems#saas-platforms'],
      ['ERP demo', '/demo/gc-erp'],
      ['HIMS demo', '/demo/g-hims'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Industries', '/industries'],
      ['Engineering', '/approach'],
      ['Evidence', '/case-studies'],
      ['About', '/about'],
      ['Contact', '/contact'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-[10px] font-bold text-zinc-950">GC</span>
              <span className="text-sm font-semibold text-white">Gotham Coders</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
              ERP, healthcare, and enterprise systems engineered around operational workflows, trusted authority boundaries, and critical data.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
            >
              Discuss a system
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} className="text-sm text-zinc-400 hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-zinc-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600">
            <span>© {new Date().getFullYear()} Gotham Coders</span>
            <a href="mailto:help@gothamcoders.com" className="inline-flex items-center gap-1.5 hover:text-zinc-300">
              <Mail className="h-3.5 w-3.5" />
              help@gothamcoders.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/irtizah738"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gotham Coders on GitHub"
              className="rounded-lg border border-zinc-800 p-2 text-zinc-500 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/gotham-coders/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gotham Coders on LinkedIn"
              className="rounded-lg border border-zinc-800 p-2 text-zinc-500 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
