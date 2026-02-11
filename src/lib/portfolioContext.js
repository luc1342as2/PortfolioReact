/**
 * Builds a text context from portfolio data for the AI chatbot system prompt.
 */
export function buildPortfolioContext(data) {
  const { hero, about, skills, projects, certificates, contact, social } = data;
  const sections = [];

  if (hero) {
    sections.push(`## About ${hero.name}\n- Roles: ${hero.roles?.join(', ') || 'N/A'}\n- Bio: ${hero.bio || 'N/A'}\n- CV/Resume links: ${hero.cvLinks?.map((l) => l.label).join(', ') || 'N/A'}`);
  }

  if (about) {
    const educationText = about.education?.items?.map((i) => (typeof i === 'string' ? i : `${i.credential} — ${i.school}, ${i.location}`)).join('; ') || 'N/A';
    const experienceText = about.experience?.jobs?.map((j) => `${j.role} at ${j.company} (${j.period}): ${(j.skills || []).join(', ')}`).join(' | ') || 'N/A';
    sections.push(`## Background\n- ${about.story || 'N/A'}\n- Education: ${educationText}\n- Experience: ${experienceText}`);
  }

  if (skills) {
    const front = (skills.frontend || []).map((s) => `${s.name} (${s.level}%)`).join(', ');
    const back = (skills.backend || []).map((s) => `${s.name} (${s.level}%)`).join(', ');
    sections.push(`## Skills\n- Front-end: ${front || 'N/A'}\n- Back-end & tools: ${back || 'N/A'}`);
  }

  if (projects?.length) {
    const list = projects
      .map((p) => `- ${p.name}: ${(p.skills || []).join(', ')}. GitHub: ${p.github}. Demo: ${p.demo}`)
      .join('\n');
    sections.push(`## Projects\n${list}`);
  }

  if (certificates?.length) {
    const list = certificates.map((c) => c.title).join(', ');
    sections.push(`## Certificates\n${list}`);
  }

  if (contact) {
    sections.push(`## Contact\n- Email: ${contact.email || 'N/A'}`);
  }
  if (data.social?.length) {
    sections.push(`## Social\n- ${data.social.map((s) => `${s.name}: ${s.href}`).join('\n- ')}`);
  }

  return sections.join('\n\n');
}
