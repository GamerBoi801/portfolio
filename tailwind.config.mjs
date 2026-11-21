import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        text: 'var(--text)',
        heading: 'var(--heading)',
        muted: 'var(--muted)',
        accent: {
          DEFAULT: 'var(--accent)',
          dim: 'var(--accent-dim)',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', '"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        grid: '72rem',
      },
      borderRadius: {
        DEFAULT: '2px',
        card: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--heading)',
            '--tw-prose-lead': 'var(--text)',
            '--tw-prose-links': 'var(--accent)',
            '--tw-prose-bold': 'var(--heading)',
            '--tw-prose-counters': 'var(--muted)',
            '--tw-prose-bullets': 'var(--muted)',
            '--tw-prose-hr': 'var(--border)',
            '--tw-prose-quotes': 'var(--text)',
            '--tw-prose-quote-borders': 'var(--border)',
            '--tw-prose-captions': 'var(--muted)',
            '--tw-prose-code': 'var(--accent)',
            '--tw-prose-pre-code': 'var(--text)',
            '--tw-prose-pre-bg': 'var(--surface)',
            '--tw-prose-th-borders': 'var(--border)',
            '--tw-prose-td-borders': 'var(--border)',
            maxWidth: '68ch',
            color: 'var(--text)',
            a: {
              color: 'var(--accent)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              },
            },
            code: {
              fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
