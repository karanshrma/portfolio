import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight"
        >
          I craft digital experiences{' '}
          <span className="text-gradient">that matter.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
              I'm a Computer Science graduate from Amritsar College of
              Engineering and Technology, passionate about building
              cross-platform mobile and web applications.
            </p>
            <p className="text-secondary-foreground text-lg leading-relaxed">
              With experience as an Android Developer Intern at AppsAIT, I
              specialize in Flutter, Dart, and modern backend technologies to
              deliver seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h4 className="font-mono text-sm text-primary mb-3 tracking-wider">
                LANGUAGES
              </h4>
              <p className="text-secondary-foreground">
                Dart, JavaScript, Python, Kotlin
              </p>
            </div>
            <div>
              <h4 className="font-mono text-sm text-primary mb-3 tracking-wider">
                FRAMEWORKS
              </h4>
              <p className="text-secondary-foreground">
                Flutter, Provider, BLoC, FastAPI, Node.js, Express.js
              </p>
            </div>
            <div>
              <h4 className="font-mono text-sm text-primary mb-3 tracking-wider">
                TOOLS
              </h4>
              <p className="text-secondary-foreground">
                Firebase, Supabase, GitHub, Android Studio, Postman
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
