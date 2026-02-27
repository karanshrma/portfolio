import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Code2, Database, Smartphone } from 'lucide-react';

const ResumeSection = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4">
              Resume
            </p>
            <h2 className="font-serif text-5xl md:text-6xl">Experience</h2>
          </div>
          <a
            href="#"
            className="liquid-fill px-8 py-4 rounded-full border border-primary text-primary font-mono text-sm tracking-wider hidden md:inline-flex items-center gap-3 transition-colors"
          >
            <span className="flex items-center gap-3">
              <Download size={16} />
              Download CV
            </span>
          </a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Experience - large card */}
          <motion.div variants={item} className="bento-card md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-2xl">Experience</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-foreground font-medium text-lg">
                      Android Developer Intern
                    </h4>
                    <p className="text-primary font-mono text-sm">AppsAIT</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-xs whitespace-nowrap">
                    Aug – Dec 2024
                  </span>
                </div>
                <p className="text-secondary-foreground text-sm leading-relaxed">
                  Developed Android apps with authentication, chat rooms, live
                  messaging, and real-time data using Firebase and MVVM
                  architecture. Built and deployed applications on Vercel with
                  Firebase backend.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={item} className="bento-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-2xl">Education</h3>
            </div>
            <h4 className="text-foreground font-medium">B.Tech CSE</h4>
            <p className="text-primary font-mono text-sm mt-1">ACET, Amritsar</p>
            <p className="text-muted-foreground font-mono text-xs mt-2">
              June 2025
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div variants={item} className="bento-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-2xl">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Dart', 'Provider', 'BLoC', 'Material Design 3'].map(
                (s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-mono border border-border text-secondary-foreground"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div variants={item} className="bento-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Database className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-2xl">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST API'].map(
                (s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-mono border border-border text-secondary-foreground"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div variants={item} className="bento-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Smartphone className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-2xl">Mobile</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Android (Kotlin)', 'Flutter', 'MVVM', 'State Management'].map(
                (s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-mono border border-border text-secondary-foreground"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={item} className="bento-card md:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-2xl">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-foreground font-medium text-sm">
                  Flutter & Dart – Complete Guide
                </h4>
                <p className="text-muted-foreground text-xs font-mono mt-1">
                  Udemy, 2024
                </p>
              </div>
              <div>
                <h4 className="text-foreground font-medium text-sm">
                  Android Development Bootcamp
                </h4>
                <p className="text-muted-foreground text-xs font-mono mt-1">
                  Harnoor Singh
                </p>
              </div>
              <div>
                <h4 className="text-foreground font-medium text-sm">
                  Introduction to IoT
                </h4>
                <p className="text-muted-foreground text-xs font-mono mt-1">
                  IIT Kharagpur
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile download button */}
        <div className="mt-8 md:hidden text-center">
          <a
            href="#"
            className="liquid-fill inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary text-primary font-mono text-sm tracking-wider"
          >
            <span className="flex items-center gap-3">
              <Download size={16} />
              Download CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
