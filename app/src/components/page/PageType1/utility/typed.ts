import { getProficiencyString as getProf } from 'components/core/Section/SectionSkillset';

export const getTyped = (section: number, resume: any): { [key: string]: string } => {
  switch (section) {
    case 0:
      const aboutPoints = resume.aboutPoints.map((point: { item: string }) => `<li>${point.item}</li>`).join('');
      return { heading: resume.aboutHeading, strings: `${resume.aboutIntro}<ul>${aboutPoints}</ul>` };
    case 1:
      return {
        heading: resume.skillsetHeading,
        strings: `<div class="skillset">${getSkillset(resume)[0]}</div><div class="skillset">${getSkillset(resume)[1]}</div>`,
      };
    case 2:
      const work = resume.work.map((item: any) => getHistory(item)).join('');
      return { heading: resume.workHeading, strings: encode(work) };
    case 3:
      const education = resume.education.map((item: any) => getHistory(item)).join('');
      return { heading: resume.educationHeading, strings: encode(education) };
    case 4:
      const interestsPoints = resume.interestsPoints.map((point: { item: string }) => `<li>${point.item}</li>`).join('');
      return { heading: resume.interestsHeading, strings: `${resume.interestsIntro}<ul>${interestsPoints}</ul>` };
    case 5:
      return { heading: resume.referencesHeading, strings: resume.referencesIntro };
    case 6:
      return { heading: resume.metaHeading, strings: `${resume.metaCopyIntro}${resume.metaCopyPage[0].copy}${resume.metaCopyOutro}` };
    default:
      return { heading: '', strings: '' };
  }
};

const encode = (value: string): string => value.replace(/&/g, '&amp;');

const getHistory = (item: any): string => {
  const points = item.points.map((point: any): string => `<li>${point.item}</li>`).join('');
  const skillset =
    item.skillset &&
    item.skillset
      .map(
        (skillset: any): string => `
          <li>
            <span>${skillset.area}:</span>
            <span>${skillset.skills}</span>
          </li>`
      )
      .join('');

  return `
    <div class="history">
      <div>
        <span>
          ${item.title ? `<span>${item.title},</span>` : ``}
          ${item.company ? `<span>${item.company},</span>` : ``}
          ${item.school ? `<span>${item.school},</span>` : ``}
          ${item.campus ? `<span>${item.campus},</span>` : ``}
          <span>${item.location}</span>
        </span>
        <span>${item.dates}</span>
      </div>
      ${item.intro ? `<div><span>${item.intro}</span></div>` : ``}
      <ul>${points}</ul>
      ${skillset ? `<ul>${skillset}</ul>` : ``}
    </div>`;
};

const getSkillset = (resume: any): string[] => {
  const dash = (count: number): string => `&ndash;`.repeat(count);
  const header = (value1: string, value2: string): string => `<div class="header"><span>${value1}</span><span>${value2}</span></div>`;

  const areas = resume.skillsetAreas.map((item: { area: string; skills: string }) => `<div><span>${item.area}:</span><span>${item.skills}</span></div>`).join('');

  const proficiency = `${header('Skill', 'Proficiency')}${header(dash(5), dash(11))}
    ${resume.skillsetProficiency
      .map(
        (item: { isVisible: boolean; skill: string; proficiency: string }) =>
          item.isVisible && `<div><span>${item.skill}:</span><span>${getProf(item.proficiency, 2.1, '+')} [${item.proficiency}%]</span></div>`
      )
      .join('')}`;

  return [areas, proficiency];
};
