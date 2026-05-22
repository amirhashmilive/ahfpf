import { motion } from 'framer-motion';

export default function FrameworkFlow() {
  return (
    <section id="p5" className="section-100vh" style={{ backgroundColor: '#fffbeb', position: 'relative' }}>
      {/* Background connecting lines animation */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.1 }} pointerEvents="none">
        <motion.path 
          d="M 100,0 L 100,1000 M 300,0 L 300,1000 M 500,0 L 500,1000 M 700,0 L 700,1000 M 900,0 L 900,1000"
          stroke="var(--color-comm)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path 
          d="M 0,200 L 2000,200 M 0,400 L 2000,400 M 0,600 L 2000,600 M 0,800 L 2000,800"
          stroke="var(--color-comm)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="max-w-4xl text-center" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="badge" style={{ backgroundColor: 'var(--color-comm)', color: 'white' }}>P5 The Bridge</span>
          <h2 className="title-section" style={{ color: 'var(--color-text)' }}>Communication</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <blockquote style={{ 
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
            fontFamily: 'var(--font-heading)', 
            fontStyle: 'italic',
            borderLeft: '4px solid var(--color-comm)',
            paddingLeft: '1.5rem',
            margin: '2rem auto',
            maxWidth: '600px',
            color: 'var(--color-text)',
            lineHeight: 1.4
          }}>
            "Communication determines whether value travels across the framework."
          </blockquote>
        </motion.div>

        <motion.div 
          className="grid grid--2col" 
          style={{ gap: '2rem', textAlign: 'left', marginTop: '3rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
            <h3 style={{ color: 'var(--color-comm)', fontSize: 'clamp(1.1rem, 3.5vw, 1.25rem)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-body)' }}>Transmission</h3>
            <p style={{ fontSize: '0.95rem' }}>P5 enables the flow from Entity → Execution → Initiative → Impact. Without it, value is created but never communicated.</p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
            <h3 style={{ color: 'var(--color-comm)', fontSize: 'clamp(1.1rem, 3.5vw, 1.25rem)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-body)' }}>Feedback Loops</h3>
            <p style={{ fontSize: '0.95rem' }}>Impact must be socially visible. P5 returns feedback from Impact back to the Entity, allowing for adaptive redesign.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
