export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  // Strip HTML / MD syntax rough estimate
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '').replace(/[#*`_~\[\]]/g, '');
  const wordCount = clean.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}
