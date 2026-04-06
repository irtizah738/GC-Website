import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', path: '/about' },
      { name: 'Systems We Build', path: '/systems' },
      { name: 'Industries', path: '/industries' },
      { name: 'Engineering Approach', path: '/approach' },
      { name: 'Case Studies', path: '/case-studies' },
    ],
  },
  {
    title: 'Systems',
    links: [
      { name: 'ERP Systems', path: '/systems#erp-systems' },
      { name: 'HMIS (Healthcare)', path: '/systems#hmis-healthcare' },
      { name: 'SaaS Platforms', path: '/systems#saas-platforms' },
      { name: 'Research Systems', path: '/systems#research-domain-specific' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Healthcare', path: '/industries#healthcare-hospitals' },
      { name: 'Tertiary Care', path: '/industries#tertiary-care' },
      { name: 'Sports Systems', path: '/industries#sports-performance' },
      { name: 'Manufacturing', path: '/industries#manufacturing-supply-chain' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dzeiyvngc/image/upload/v1775507565/WhatsApp_Image_2024-04-27_at_02.22.22_21816fa5_ch75oe.jpg" 
                  alt="Gotham Coders Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Gotham<span className="text-zinc-500 font-normal">Coders</span>
              </span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              Premium software development firm specializing in mission-critical systems, 
              healthcare solutions, and scalable backend architectures for global enterprises.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/irtizah738" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/gotham-coders/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-5 h-5 shrink-0 text-zinc-400" />
                <span>Calslaan 47j, 051, Enschede, 7522MJ, Netherlands</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                <Mail className="w-5 h-5 shrink-0 text-zinc-400" />
                <a href="mailto:hello@gothamcoders.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  hello@gothamcoders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Gotham Coders. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-tighter">
              Built for Performance
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-tighter">
              v1.1.7
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
