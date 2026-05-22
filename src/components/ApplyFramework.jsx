import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const matrixData = {
  csr: { p1: "Corporate Entity / Foundation", p2: "NGO Partner / Implementation Agency", p3: "Health/Education CSR Program", p4: "Community Well-being & Livelihood Improvement", p5: "Local Language Meetings, Community Consultations, Public Reports" },
  governance: { p1: "Government Ministry / Department", p2: "District Administration / Block Office", p3: "Subsidy Scheme / Public Service Delivery", p4: "Poverty Reduction / Access to Services", p5: "Gram Sabha, Community Radio, Policy Briefs in Local Dialects" },
  nonprofit: { p1: "International NGO / Funding Agency", p2: "Local Field Team / Volunteers", p3: "Capacity Building Workshop / Relief Effort", p4: "Skill Acquisition / Immediate Relief", p5: "Feedback Surveys, Beneficiary Interviews, Transparent Reporting" },
  education: { p1: "University / Educational Board", p2: "Teachers / Faculty Members", p3: "New Curriculum Rollout / EdTech Platform", p4: "Improved Learning Outcomes / Skill Readiness", p5: "Parent-Teacher Meetings, Student Feedback Loops, Accessible Syllabus" }
};

export default function ApplyFramework() {
  const [activeDomain, setActiveDomain] = useState('csr');
  
  return (
    <section className="section-100vh" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: false }}
          style={{ fontSize: '3rem', marginBottom: '2rem' }}
        >
          Apply the Framework
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: false }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}
        >
          {Object.keys(matrixData).map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: `2px solid ${activeDomain === domain ? 'var(--color-primary)' : 'var(--color-border)'}`,
                backgroundColor: activeDomain === domain ? 'var(--color-primary)' : 'transparent',
                color: activeDomain === domain ? 'white' : 'var(--color-text)',
                cursor: 'pointer',
                fontWeight: 600,
                textTransform: 'capitalize',
                transition: 'all 0.2s'
              }}
            >
              {domain}
            </button>
          ))}
        </motion.div>

        <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              style={{ padding: '2rem', textAlign: 'left' }}
            >
              {[
                { id: 'p1', label: 'P1: Entity', color: 'var(--color-entity)' },
                { id: 'p2', label: 'P2: Execution', color: 'var(--color-execution)' },
                { id: 'p3', label: 'P3: Initiative', color: 'var(--color-initiative)' },
                { id: 'p4', label: 'P4: Impact', color: 'var(--color-impact)' },
                { id: 'p5', label: 'P5: Communication', color: 'var(--color-comm)' }
              ].map((item, idx) => (
                <div key={item.id} style={{ display: 'flex', borderBottom: idx < 4 ? '1px solid var(--color-border)' : 'none', padding: '1rem 0' }}>
                  <div style={{ width: '150px', fontWeight: 600, color: item.color, flexShrink: 0 }}>{item.label}</div>
                  <div style={{ fontWeight: item.id === 'p5' ? 600 : 400 }}>{matrixData[activeDomain][item.id]}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
