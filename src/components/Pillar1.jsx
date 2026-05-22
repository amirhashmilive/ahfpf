import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function Pillar1() {
  return (
    <section id="p1" className="section-100vh" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--color-entity)', color: 'white', marginBottom: '2rem', boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}>
            <Building2 size={48} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="badge" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-entity)' }}>P1 Entity</span>
          <h2 className="title-section">The Initiating Actor</h2>
          <p className="text-body-large">
            The origin point of any initiative. The individual, organization, company, or government that possesses the resources, the mandate, and the vision to enact change.
          </p>
        </motion.div>

        {/* Connection Line to Next Section */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '15vh' }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          style={{ backgroundColor: 'var(--color-entity)', margin: '3rem auto 0 auto' }}
          className="connection-line"
        />
      </div>
    </section>
  );
}
