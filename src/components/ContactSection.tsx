import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl mb-16"
        >
          Let's work{' '}
          <span className="text-gradient italic">together.</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="floating-label-group">
                <input
                  type="text"
                  placeholder=" "
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <label>Your Name</label>
              </div>
              <div className="floating-label-group">
                <input
                  type="email"
                  placeholder=" "
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <label>Your Email</label>
              </div>
              <div className="floating-label-group">
                <textarea
                  rows={4}
                  placeholder=" "
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
                <label>Your Message</label>
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-3 text-primary font-mono text-sm"
                  >
                    <CheckCircle2 size={20} />
                    Message sent successfully!
                  </motion.div>
                ) : (
                  <motion.button
                    key="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type="submit"
                    className="liquid-fill px-8 py-4 rounded-full border border-primary text-primary font-mono text-sm tracking-wider inline-flex items-center gap-3"
                  >
                    <span className="flex items-center gap-3">
                      Send Message
                      <Send size={16} />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-primary" size={18} />
                <span className="font-mono text-sm text-muted-foreground">
                  EMAIL
                </span>
              </div>
              <a
                href="mailto:ks2275863@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                ks2275863@gmail.com
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={18} />
                <span className="font-mono text-sm text-muted-foreground">
                  LOCATION
                </span>
              </div>
              <p className="text-foreground">Amritsar, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
