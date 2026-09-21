import { jsPDF } from 'jspdf';

export function createCVDoc(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4', // 595.28 x 841.89
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 42;
  const contentWidth = pageWidth - margin * 2;
  let y = 38;

  // Header
  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(20, 20, 20);
  doc.text('Navinda Rashen Pimburage', pageWidth / 2, y, { align: 'center' });

  y += 16;
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);
  doc.text(
    '0762071252  |  rashenpimburage@gmail.com  |  Colombo District, Sri Lanka',
    pageWidth / 2,
    y,
    { align: 'center' }
  );

  y += 13;
  doc.text(
    'LinkedIn: linkedin.com/in/navinda-rashen-97066826b  |  GitHub: github.com/Mr-Navy',
    pageWidth / 2,
    y,
    { align: 'center' }
  );

  y += 18;

  function addSection(title: string) {
    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 45, 90);
    doc.text(title, margin, y);
    y += 4;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 12;
  }

  function addParagraph(text: string, lineHeight = 12) {
    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(25, 25, 25);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * lineHeight + 3;
  }

  function addBullet(bulletText: string, boldPrefix = '', indent = 12, lineHeight = 11.5) {
    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(25, 25, 25);

    const bulletSymbol = '•  ';
    const bulletX = margin + 4;
    const textX = margin + indent;
    const availableWidth = contentWidth - indent;

    doc.text(bulletSymbol, bulletX, y);

    if (boldPrefix) {
      doc.setFont('times', 'bold');
      const prefixWidth = doc.getTextWidth(boldPrefix);
      doc.text(boldPrefix, textX, y);
      doc.setFont('times', 'normal');

      const firstLineAvail = availableWidth - prefixWidth;
      const words = bulletText.split(' ');
      const firstLineWords: string[] = [];
      const remainingWords = [...words];

      while (remainingWords.length > 0) {
        const testLine = [...firstLineWords, remainingWords[0]].join(' ');
        if (doc.getTextWidth(testLine) < firstLineAvail) {
          firstLineWords.push(remainingWords.shift()!);
        } else {
          break;
        }
      }

      doc.text(firstLineWords.join(' '), textX + prefixWidth, y);
      y += lineHeight;

      if (remainingWords.length > 0) {
        const restLines = doc.splitTextToSize(remainingWords.join(' '), availableWidth);
        doc.text(restLines, textX, y);
        y += restLines.length * lineHeight;
      }
      y += 1.5;
    } else {
      const lines = doc.splitTextToSize(bulletText, availableWidth);
      doc.text(lines, textX, y);
      y += lines.length * lineHeight + 1.5;
    }
  }

  // 1. Professional Summary
  addSection('Professional Summary');
  addParagraph(
    'Detail-oriented 3rd-year Computer Science Undergraduate at the University of Sri Jayewardenepura, part of the inaugural cohort. Co-author of research in data-driven financial modeling for large-scale events. Proficient in full-stack development, system analysis, and software quality assurance. Active IEEE member with a focus on leveraging emerging technologies to drive business sustainability and operational efficiency.'
  );
  y += 3;

  // 2. Education
  addSection('Education');
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(25, 25, 25);
  doc.text('BSc (Hons) in Computer Science', margin, y);
  y += 11;
  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.text('University of Sri Jayewardenepura | 2022/2023 Intake (Inaugural Cohort) – Present', margin, y);
  y += 12;

  addBullet('Maintained an 80% mandatory attendance rate, demonstrating strict academic discipline.');
  addBullet(
    'Software Architecture and Design Patterns, Artificial Intelligence, Database Management Systems, Data Structures and Algorithms, Software Quality Assurance.',
    'Relevant Coursework: '
  );
  y += 3;

  // 3. Technical Skills
  addSection('Technical Skills');
  addBullet('Java, Python, JavaScript, C++, SQL.', 'Programming Languages: ');
  addBullet('React, Spring Boot, Node.js, HTML5, CSS3.', 'Frameworks & Web: ');
  addBullet('MS Project, Primavera, Git, LaTeX.', 'Tools & Software: ');
  addBullet('Software Architecture, Artificial Intelligence, Statistical Inference, Database Systems.', 'Theoretical Proficiencies: ');
  y += 3;

  // 4. Project Experience
  addSection('Project Experience');
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.text('Course Registration System (Educational Sector)', margin, y);
  y += 11;
  addBullet('Designed an educational platform for real-time course enrollment and academic progress tracking.');
  addBullet('Implemented prerequisite verification logic and automated scheduling features to optimize administrative efficiency.');
  y += 2;

  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.text('Online Pizza Ordering Platform (E-commerce Sector)', margin, y);
  y += 11;
  addBullet('Developed a full-stack minimum viable product (MVP) utilizing React for the frontend and Spring Boot for the backend.');
  addBullet('Engineered transaction management features to handle orders, customizable product attributes, and secure checkout processes.');
  y += 3;

  // 5. Research & Quantitative Modeling
  addSection('Research & Quantitative Modeling');
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.text('Profit Analysis of an Annual University Talent Show: A Data-Driven Analysis', margin, y);
  y += 11;
  addBullet('Co-authored research submitted to the 1st Jayewardenepura Computing Symposium 2026.');
  addBullet('Developed a quantitative framework and sensitivity testing using MS Project to evaluate financial risks.');
  addBullet('Analyzed fiscal dependencies and revenue streams to present actionable profitability strategies.');
  y += 2;

  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.text('Optimizing Greenhouse Conditions for Maximum Crop Yield (Statistical Research)', margin, y);
  y += 11;
  addBullet('Analyzed environmental impacts on Sri Lankan tomato yields using Python (Pandas, NumPy, SciPy).');
  addBullet('Applied hypothesis testing and linear regression to identify statistically significant climate drivers.');
  addBullet('Developed quantitative models for precision agriculture to optimize crop resource allocation.');
  y += 3;

  // 6. Professional Development & Certifications
  addSection('Professional Development & Certifications');
  addBullet(
    'Comprehensive program covering the theoretical foundations of AI & ML with practical, hands-on application in TensorFlow, PyTorch, and Artificial Neural Networks. (Credential ID: wz4emxfzv4)',
    'AI/ML Engineer - Stage 1 | SLIIT Faculty of Computing (Dec 2025): '
  );
  addBullet(
    'Foundational certification in front-end web development, covering HTML, CSS, and JavaScript via the Centre for Open and Distance Education. (Credential ID: REbnOKYGg7)',
    'Web Design for Beginners | University of Moratuwa (Faculty of IT) (Jan 2024): '
  );
  addBullet(
    'Active member; participated in inter-university problem-solving competitions like AlgoArena 2025 and engaged in high-level tech seminars, including TechXplore on Quantum Computing.',
    'IEEE Student Branch (USJ) (2025): '
  );
  addBullet(
    'Advanced training focused on Large Language Models (LLM), Reinforcement Learning, and Unsupervised Learning. Recognized with a Certificate of Excellence for the final AI/ML project. (Credential ID: SKML25940)',
    'Artificial Intelligence & Machine Learning Certification | SKYREK (Dec 2025): '
  );

  return doc;
}

/**
 * Downloads Navinda Rashen Pimburage's CV as a PDF file
 */
export async function downloadCV(): Promise<void> {
  const fileName = 'Navinda_Rashen_Pimburage_CV.pdf';
  const staticFileUrl = '/Navinda_Rashen_Pimburage_CV.pdf';

  try {
    // Attempt 1: Fetch static pre-generated PDF and download via Blob
    const response = await fetch(staticFileUrl);
    if (response.ok) {
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      }, 300);
      return;
    }
  } catch (err) {
    console.warn('Direct static fetch failed, falling back to client-side jsPDF generation:', err);
  }

  // Attempt 2: Generate PDF directly client-side via jsPDF
  try {
    const doc = createCVDoc();
    doc.save(fileName);
  } catch (generateErr) {
    console.error('jsPDF generation error:', generateErr);
    // Attempt 3: Direct link trigger
    const link = document.createElement('a');
    link.href = staticFileUrl;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 300);
  }
}
