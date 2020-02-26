export const getHeadings = (data: any): any => {
  const resume = data.options.resume;
  return {
    about: resume.aboutHeading,
    skillset: resume.skillsetHeading,
    work: resume.workHeading,
    education: resume.educationHeading,
    interests: resume.interestsHeading,
    references: resume.referencesHeading,
    meta: resume.metaHeading,
  };
};
