import React from 'react';
import { motion } from 'framer-motion';

export default function Methodology() {
  return (
    <section className="section-100vh" style={{ backgroundColor: '#ffffff', justifyContent: 'space-between' }}>
      <div className="max-w-4xl" style={{ marginTop: 'auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Methodology & Transparency</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', textAlign: 'center', marginBottom: '3rem' }}>
            Built on an adaptive systems approach. Non-ideological, structurally aligned.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Transparency Ledger</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                This repository serves as a Transparency Ledger. Every change is tracked publicly via GitHub to ensure archival legitimacy and open methodology culture.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Version 1.0</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                Initial release of the Five Pillars Framework as public intellectual infrastructure. Designed for researchers, policymakers, and system architects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <footer style={{ width: '100%', padding: '2rem 0', borderTop: '1px solid var(--color-border)', marginTop: 'auto', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
        <p>Amir Hashmi Five Pillars Framework (AHFPF) — An independent open-source public systems framework.</p>
        <p>Licensed under CC BY-SA 4.0 (documentation) and MIT (code).</p>
      </footer>
    </section>
  );
}
