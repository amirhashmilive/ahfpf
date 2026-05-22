import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, EarOff, EyeOff, LayoutTemplate } from 'lucide-react';

const failures = [
  { id: 1, title: 'Missing Link', symptom: 'Public unaware of initiative', cause: 'Communication missing at source (P1 strong, P5 weak)', icon: EarOff },
  { id: 2, title: 'Execution Collapse', symptom: 'Implementation fails to deliver', cause: 'Implementation gap (P3 active, P2 weak)', icon: LayoutTemplate },
  { id: 3, title: 'Invisible Impact', symptom: 'Change occurs but isn\'t recognized', cause: 'No feedback loop (P4 exists, P5 absent)', icon: EyeOff },
  { id: 4, title: 'Propaganda', symptom: 'Loud messaging, zero delivery', cause: 'Style over substance (P5 strong, P3 weak)', icon: AlertTriangle }
];

export default function FailureMapping() {
  return (
    <section className="section-100vh" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem' }}>Where Systems Break</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)' }}>Communication debt occurs when implementation advances faster than public understanding.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {failures.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
              style={{
                padding: '2rem',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                backgroundColor: '#f8fafc',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
            >
              <f.icon size={32} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{f.title}</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>Symptom: {f.symptom}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Cause: {f.cause}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
