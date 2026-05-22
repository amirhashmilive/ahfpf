import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="section-100vh">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="title-hero">
            Five Pillars Framework
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-subtitle">
            A universal analytical and implementation framework explaining how communication determines whether initiatives become meaningful societal impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
        >
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Scroll to Explore ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
