import Link from '../components/AppLink';
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import Section from '../components/Section';

const products = [
  {
    icon: Stethoscope,
    name: 'G-HIMS',
    category: 'Hospital Operating System',
    status: 'Pilot qualification program',
    description:
      'A hospital operating system connecting clinical, financial, workforce, supply-chain, and operational workflows around one governed event backbone.',
    href: '/products/g-hims',
    demo: '/demo/g-hims',
    capabilities: ['Patient 360', 'Clinical workflows', 'SCM & Finance', 'Offline-first'],
  },
  {
    icon: Boxes,
    name: 'GC-ERP',
    category: 'Enterprise Operations Platform',
    status: 'Working engineering build',
    description:
      'A manufacturing-first enterprise operations platform connecting sales, procurement, inventory, production, quality, logistics, finance, workforce, and audit.',
    href: '/products/gc-erp',
    demo: '/demo/gc-erp',
    capabilities: ['Manufacturing & MES', 'Inventory & WMS', 'Finance', 'Traceability'],
  },
];

export default function Products() {
  return (
    <div className="pt-16">
      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Products by Gotham Coders</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Operating systems for complex organizations.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Our flagship products turn difficult cross-department workflows into governed, traceable operational systems.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.name} className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-7 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950">
                    <Icon className="h-6 w-6 text-zinc-300" />
                  </div>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                    {product.status}
                  </span>
                </div>

                <p className="mt-8 text-sm font-semibold text-zinc-500">{product.category}</p>
                <h2 className="mt-2 text-4xl font-semibold tracking-[-0.035em] text-white">{product.name}</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{product.description}</p>

                <div className="mt-7 grid grid-cols-2 gap-2">
                  {product.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-3">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-xs font-medium text-zinc-300">{capability}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={product.href}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
                  >
                    Explore {product.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to={product.demo}
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
                  >
                    Open interactive demo
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex gap-3 rounded-2xl border border-zinc-800 bg-black p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
          <p className="text-sm leading-6 text-zinc-400">
            Product maturity and deployment claims are published conservatively. Public demos use synthetic data and are not represented as customer deployments.
          </p>
        </div>
      </Section>
    </div>
  );
}
