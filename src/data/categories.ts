/** Blog categories: slug -> display name. Keep in sync with the Blog dropdown in src/config/site.ts. */
export const categories = {
  'bond-advances-mortgage-finance': 'Bond Advances & Mortgage Finance',
  'bridging-finance': 'Bridging Finance',
  'financing-options': 'Financing Options',
  'industry-news-market-insight': 'Industry News & Market Insight',
} as const;

export type CategorySlug = keyof typeof categories;
export const categorySlugs = Object.keys(categories) as CategorySlug[];
