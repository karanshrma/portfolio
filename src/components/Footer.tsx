import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border py-12 px-6 md:px-24">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-mono text-sm text-muted-foreground">
        © 2025 Karan Sharma
      </p>
      <div className="flex items-center gap-6">
        <a
          href="mailto:ks2275863@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
