import { backendApiProject } from "./backendApi";
import { financeTrackerProject } from "./financeTracker";
import { housePricesProject } from "./housePrices";

export const allProjects = [
  housePricesProject,
  financeTrackerProject,
  backendApiProject,
];

export const featuredProject = financeTrackerProject;

export { backendApiProject, financeTrackerProject, housePricesProject };

// Helper functions
export const getProjectsByCategory = (category: string) => {
  if (category === "all") return allProjects;
  return allProjects.filter((project) => project.category === category);
};

export const getProjectsByTechnology = (tech: string) => {
  return allProjects.filter((project) => project.technologies.includes(tech));
};

export const getAllTechnologies = () => {
  const techs = allProjects.flatMap((project) => project.technologies);
  return [...new Set(techs)];
};

export const getAllCategories = () => {
  const categories = allProjects.map((project) => project.category);
  return [...new Set(categories)];
};
