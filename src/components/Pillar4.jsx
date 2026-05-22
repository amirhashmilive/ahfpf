import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function Pillar4() {
  return (
    <section id="p4" className="section-100vh" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '15vh' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{ backgroundColor: 'var(--color-initiative)', margin: '0 auto 2rem auto' }}
          className="connection-line"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          {/* Pulsing background effect */}
          <motion.div
            animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--color-impact)', borderRadius: '50%', zIndex: 0 }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--color-impact)', color: 'white', marginBottom: '2rem', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)' }}>
            <Activity size={48} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-impact)' }}>P4 Impact</span>
          <h2 className="title-section">Measurable Change</h2>
          <p className="text-body-large">
            The ultimate outcome. The real-world change in quality of life, well-being, or capability that justifies the existence of the Entity and its Initiatives.
          </p>
        </motion.div>
        
        {/* Curved arrow hinting at feedback loop */}
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
          style={{ width: '100px', height: '100px', margin: '2rem auto 0 auto' }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-impact)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 100 C 50 50, 10 50, 10 10" />
            <polyline points="0 20, 10 10, 20 20" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
