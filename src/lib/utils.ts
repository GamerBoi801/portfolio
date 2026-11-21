export function formatDate(date: Date | string, options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' }): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', options);
}

export function formatYear(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.getFullYear().toString();
}

/**
 * Encodes an email address into inverted / rot / html entities for anti-scraping
 */
export function obfuscateEmail(email: string): { encoded: string; mailto: string } {
  const encoded = email.split('').reverse().join('');
  const mailto = `mailto:${email}`;
  return { encoded, mailto };
}
