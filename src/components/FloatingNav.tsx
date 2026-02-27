import { useEffect, useRef, useState } from 'react';
import { Home, Briefcase, User, FileText, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const FloatingNav = () => {
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll.current || current < 100);
      lastScroll.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 flex items-center gap-1 transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          aria-label={label}
        >
          <Icon size={18} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card text-foreground text-xs font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default FloatingNav;
