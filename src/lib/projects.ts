import type { CollectionEntry } from 'astro:content';

export function sortProjects(projects: CollectionEntry<'projects'>[]) {
  return [...projects].sort((a, b) => {
    // Featured first
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;

    // Priority (lower number = higher up)
    if (a.data.priority !== b.data.priority) {
      return a.data.priority - b.data.priority;
    }

    // Newest first
    return b.data.startDate.getTime() - a.data.startDate.getTime();
  });
}

export function getAllTags(projects: CollectionEntry<'projects'>[]): string[] {
  const set = new Set<string>();
  for (const project of projects) {
    for (const tag of project.data.tags) {
      set.add(tag);
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
