import type {Project} from './types';

export function getProjectByName(projects: Project[], name: string) {
  const n = name.toLowerCase();
  return projects.find((p) => p.name.toLowerCase() === n);
}
