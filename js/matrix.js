const matrixData = {
  csr: {
    p1: "Corporate Entity / Foundation",
    p2: "NGO Partner / Implementation Agency",
    p3: "Health/Education CSR Program",
    p4: "Community Well-being & Livelihood Improvement",
    p5: "Local Language Meetings, Community Consultations, Public Reports"
  },
  governance: {
    p1: "Government Ministry / Department",
    p2: "District Administration / Block Office",
    p3: "Subsidy Scheme / Public Service Delivery",
    p4: "Poverty Reduction / Access to Services",
    p5: "Gram Sabha, Community Radio, Policy Briefs in Local Dialects"
  },
  nonprofit: {
    p1: "International NGO / Funding Agency",
    p2: "Local Field Team / Volunteers",
    p3: "Capacity Building Workshop / Relief Effort",
    p4: "Skill Acquisition / Immediate Relief",
    p5: "Feedback Surveys, Beneficiary Interviews, Transparent Reporting"
  },
  education: {
    p1: "University / Educational Board",
    p2: "Teachers / Faculty Members",
    p3: "New Curriculum Rollout / EdTech Platform",
    p4: "Improved Learning Outcomes / Skill Readiness",
    p5: "Parent-Teacher Meetings, Student Feedback Loops, Accessible Syllabus"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.matrix-btn');
  const cells = {
    p1: document.getElementById('matrix-p1'),
    p2: document.getElementById('matrix-p2'),
    p3: document.getElementById('matrix-p3'),
    p4: document.getElementById('matrix-p4'),
    p5: document.getElementById('matrix-p5')
  };

  if (!buttons.length || !cells.p1) return;

  function updateMatrix(domain) {
    const data = matrixData[domain];
    if (data) {
      cells.p1.textContent = data.p1;
      cells.p2.textContent = data.p2;
      cells.p3.textContent = data.p3;
      cells.p4.textContent = data.p4;
      cells.p5.textContent = data.p5;
    }
    
    buttons.forEach(btn => {
      if (btn.dataset.domain === domain) {
        btn.classList.add('btn--primary');
      } else {
        btn.classList.remove('btn--primary');
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateMatrix(btn.dataset.domain);
    });
  });
});
