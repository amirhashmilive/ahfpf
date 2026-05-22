import React from 'react';
import { motion } from 'framer-motion';
import { Cog } from 'lucide-react';

export default function Pillar2() {
  return (
    <section className="section-100vh" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-4xl text-center">
        {/* Connection from previous */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '15vh' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{ width: '4px', backgroundColor: 'var(--color-entity)', margin: '0 auto 2rem auto', borderRadius: '2px' }}
        />

        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', borderRadius: '20px', backgroundColor: 'var(--color-execution)', color: 'white', marginBottom: '2rem', boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)' }}>
            <Cog size={48} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="badge" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: 'var(--color-execution)' }}>P2 Execution</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Implementing Body</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)' }}>
            The operational mechanisms translating vision to action. The partners, agencies, teams, and volunteers doing the on-the-ground reality of getting things done.
          </p>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '15vh' }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          style={{ width: '4px', backgroundColor: 'var(--color-execution)', margin: '3rem auto 0 auto', borderRadius: '2px' }}
        />
      </div>
    </section>
  );
}
