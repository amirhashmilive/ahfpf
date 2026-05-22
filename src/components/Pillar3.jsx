import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Pillar3() {
  return (
    <section className="section-100vh" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '15vh' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{ width: '4px', backgroundColor: 'var(--color-execution)', margin: '0 auto 2rem auto', borderRadius: '2px' }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', transform: 'rotate(45deg)', backgroundColor: 'var(--color-initiative)', color: 'white', marginBottom: '2rem', boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)' }}>
            <div style={{ transform: 'rotate(-45deg)' }}>
              <Target size={48} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="badge" style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)', color: 'var(--color-initiative)' }}>P3 Initiative</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Intervention</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)' }}>
            The concrete activity being performed—the service, the product, the policy, or the campaign. The direct action taken to solve the problem.
          </p>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '15vh' }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          style={{ width: '4px', backgroundColor: 'var(--color-initiative)', margin: '3rem auto 0 auto', borderRadius: '2px' }}
        />
      </div>
    </section>
  );
}
