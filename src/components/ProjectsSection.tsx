import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce App',
    subtitle: 'Amazon Clone',
    tech: 'Flutter • Node.js • MongoDB • GPay',
    description:
      'Cross-platform shopping app with secure auth, order tracking, admin dashboard with sales graphs, and GPay checkout integration.',
    color: 'from-amber-500/20 to-orange-600/20',
    number: '01',
  },
  {
    title: 'AI Q&A App',
    subtitle: 'Perplexity Clone',
    tech: 'Flutter • FastAPI • Gemini API • RAG',
    description:
      'AI-powered question-answering app using Retrieval-Augmented Generation for context-rich, accurate answers with real-time source integration.',
    color: 'from-blue-500/20 to-cyan-500/20',
    number: '02',
  },
  {
    title: 'Blog Platform',
    subtitle: 'Clean Architecture',
    tech: 'Flutter • Bloc • Supabase • Hive',
    description:
      'Full-stack blog app with Clean Architecture, SOLID principles, offline-first experience, and seamless image upload capabilities.',
    color: 'from-emerald-500/20 to-teal-500/20',
    number: '03',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !trackRef.current || !sectionRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth - window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      animation: gsap.to(track, { x: -totalWidth, ease: 'none' }),
    });

    return () => st.kill();
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="work" className="relative overflow-hidden">
      <div className="section-padding pb-12">
        <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">
          Projects
        </h2>
      </div>

      {isMobile ? (
        <div className="flex flex-col gap-8 px-6 pb-24">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      ) : (
        <div ref={trackRef} className="flex gap-8 pl-24 pr-[50vw]">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, {
      rotateY: x * 0.02,
      rotateX: -y * 0.02,
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.5 });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-w-[85vw] md:min-w-[500px] lg:min-w-[600px] group"
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative h-[450px] md:h-[500px] rounded-2xl bg-gradient-to-br ${project.color} border border-[hsl(var(--glass-border))] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-primary/30`}
      >
        <div>
          <span className="font-mono text-muted-foreground text-sm">
            {project.number}
          </span>
          <h3 className="font-serif text-4xl md:text-5xl mt-4 mb-2">
            {project.title}
          </h3>
          <p className="text-primary font-mono text-sm">{project.subtitle}</p>
        </div>

        <div>
          <p className="text-secondary-foreground leading-relaxed mb-6 max-w-md">
            {project.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground font-mono text-xs">
              {project.tech}
            </span>
            <div className="flex gap-3">
              <button className="magnetic-btn p-3 rounded-full border border-muted-foreground/30 text-foreground hover:text-primary-foreground hover:border-primary transition-colors">
                <span><Github size={18} /></span>
              </button>
              <button className="magnetic-btn p-3 rounded-full border border-muted-foreground/30 text-foreground hover:text-primary-foreground hover:border-primary transition-colors">
                <span><ExternalLink size={18} /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
