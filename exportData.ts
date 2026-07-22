import fs from 'fs';
import { bloodTests } from './src/data/bloodTests';

let kb = `# SVR Aesthetics Blood Tests & IV Drips - Knowledge Base\n\n`;
kb += `**Clinic Name:** SVR Aesthetics\n`;
kb += `**Location:** Unit 2, Stainer Square Centre, Queensway, Bletchley, Milton Keynes, MK2 2FY\n`;
kb += `**Booking URL:** https://svraesthetics.co.uk/book-free-consultation/\n`;
kb += `**Main Website:** https://svraesthetics.co.uk/\n`;
kb += `**Contact / WhatsApp:** 077 92284575\n`;
kb += `**Email:** svraesthetics@gmail.com\n`;
kb += `**Practitioner:** Registered Nurse Prescriber, highly skilled & experienced in aesthetic and skin treatments.\n`;
kb += `**General Clinic Info:** SVR Aesthetics is an expert aesthetics clinic in Milton Keynes. While this chatbot focuses on blood tests and IV Vitamin drips, the clinic also offers advanced skin treatments, anti-wrinkle injections, dermal fillers, laser hair removal, and fat dissolving injections. For skin aesthetic treatments, users should be directed to visit the main website: https://svraesthetics.co.uk/ \n\n`;
kb += `**Turnaround Time:** Most blood test results are available within 48–72 hours.\n`;
kb += `**What is Included:** Pricing is inclusive of the clinical blood draw and full diagnostic report.\n\n`;
kb += `## Available Tests and Pricing\n\n`;

for (const key of Object.keys(bloodTests)) {
  const test = bloodTests[key];
  kb += `### ${test.title}\n`;
  kb += `- **Price:** ${test.price}\n`;
  kb += `- **Category:** ${test.category}\n`;
  kb += `- **Description:** ${test.heroDescription}\n`;
  kb += `- **Details:** ${test.aboutTextParagraphs.join(' ')}\n`;
  
  if (test.faqs && test.faqs.length > 0) {
    kb += `- **FAQs:**\n`;
    for (const faq of test.faqs) {
      kb += `  - Q: ${faq.question}\n    A: ${faq.answer}\n`;
    }
  }
  kb += `\n`;
}

fs.writeFileSync('svr_knowledge_base.txt', kb, 'utf-8');
console.log('Knowledge base generated at svr_knowledge_base.txt');
