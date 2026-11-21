import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const url = z.string().url();

export const CATEGORIES = [
  'security',
  'ml-ai',
  'embedded-robotics',
  'systems',
  'web',
  'competitive-programming',
] as const;

// ---------- PROJECTS ----------
const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '*/index.{md,mdx}',
    generateId: ({ entry }) => entry.split('/')[0], // folder name = slug
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      tagline: z.string().max(120), // one line on the card
      summary: z.string().max(300), // 2-3 sentences for SEO + grid
      category: z.enum(CATEGORIES),
      tags: z.array(z.string()).min(1).max(8),
      status: z.enum(['completed', 'in-progress', 'archived']),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(), // omit = ongoing
      role: z.string(), // e.g. "Solo developer"
      teamSize: z.number().int().positive().default(1),
      highlights: z.array(z.string()).max(4).default([]), // measured results
      featured: z.boolean().default(false),
      priority: z.number().int().default(100), // lower = higher up
      cover: image(),
      coverAlt: z.string(),
      video: url.optional(),
      links: z
        .object({
          repo: url.optional(),
          demo: url.optional(),
          writeup: url.optional(),
        })
        .default({}),
      draft: z.boolean().default(false),
    }),
});

// ---------- PUBLICATIONS ----------
const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1), // in order; your name gets bolded
    venue: z.string(), // full venue name
    venueShort: z.string().optional(), // e.g. "USENIX Sec '27"
    type: z.enum([
      'journal',
      'conference',
      'workshop',
      'preprint',
      'thesis',
      'poster',
      'in-progress',
    ]),
    status: z.enum(['published', 'accepted', 'under-review', 'preprint', 'in-progress']),
    date: z.coerce.date(),
    doi: z.string().optional(),
    abstract: z.string().optional(),
    award: z.string().optional(), // e.g. "Best Paper"
    links: z
      .object({
        pdf: url.optional(),
        arxiv: url.optional(),
        code: url.optional(),
        slides: url.optional(),
        video: url.optional(),
      })
      .default({}),
    bibtex: z.string().optional(),
    project: reference('projects').optional(), // links paper <-> project
    featured: z.boolean().default(false),
  }),
});

// ---------- POSTS (writing) ----------
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(['ctf', 'malware-analysis', 'project-log', 'research-notes', 'tutorial']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      project: reference('projects').optional(),
      ctf: z
        .object({
          // only for CTF write-ups
          event: z.string(),
          challenge: z.string(),
          category: z.string(), // pwn, web, rev, crypto ...
          points: z.number().optional(),
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

// ---------- EXPERIENCE ----------
const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      role: z.string(),
      org: z.string(),
      orgUrl: url.optional(),
      location: z.string(), // or "Remote"
      type: z.enum([
        'internship',
        'research',
        'part-time',
        'teaching',
        'leadership',
        'volunteer',
      ]),
      start: z.coerce.date(),
      end: z.coerce.date().optional(), // omit = present
      summary: z.string(),
      highlights: z.array(z.string()).default([]),
      tech: z.array(z.string()).default([]),
      logo: image().optional(),
    }),
});

// ---------- EDUCATION ----------
const education = defineCollection({
  loader: glob({ base: './src/content/education', pattern: '*.md' }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(), // "BS Cybersecurity"
    location: z.string(),
    start: z.coerce.date(),
    expectedEnd: z.coerce.date(),
    gpa: z.number().optional(),
    showGpa: z.boolean().default(false),
    courses: z.array(z.string()).default([]),
    activities: z.array(z.string()).default([]),
  }),
});

// ---------- ACHIEVEMENTS / SKILLS / SOCIALS (single YAML files) ----------
const achievements = defineCollection({
  loader: file('src/content/achievements.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'competitive-programming',
      'ctf',
      'hackathon',
      'scholarship',
      'award',
      'certification',
    ]),
    rank: z.string().optional(), // "Specialist (1450)", "3rd / 120"
    description: z.string().optional(),
    url: url.optional(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.yaml'),
  schema: z.object({
    id: z.string(),
    group: z.string(), // "Languages", "Security", "ML"
    items: z.array(z.string()),
    order: z.number().int(),
  }),
});

const socials = defineCollection({
  loader: file('src/content/socials.yaml'),
  schema: z.object({
    id: z.string(), // "github", "linkedin" ...
    label: z.string(),
    url: z.string(), // https://... or mailto:
    icon: z.string(), // e.g. "simple-icons:github"
    inHero: z.boolean().default(false),
    order: z.number().int(),
  }),
});

export const collections = {
  projects,
  publications,
  posts,
  experience,
  education,
  achievements,
  skills,
  socials,
};
