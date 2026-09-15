/**
 * Site-wide configuration.  <<< edit company details here >>>
 *
 * Everything that identifies the company lives in this one file: name, contact
 * details, address, social links, footer text and the small claims that appear
 * in the copy. Pages and components import from here, so a change is reflected
 * everywhere after a rebuild.
 */

const name = 'Reliance Trading SA';

export const site = {
  // --- Identity -------------------------------------------------------------
  name,
  legalName: 'Reliance Trading SA (Pty) Ltd',
  registrationNumber: '2026/558793/07',
  tagline: 'Property Bridging Finance',
  description:
    `${name} offers fast access to surplus property sale proceeds, estate agent commissions, ` +
    'bond advances and secured business loans. Easy, efficient, fast bridging finance.',

  // --- Web ---------------------------------------------------------------------
  url: 'https://reliancetrading.co.za',
  domainDisplay: 'reliancetrading.co.za',

  // --- Contact ----------------------------------------------------------------
  email: 'info@reliancetrading.co.za',
  phone: '083 387 1136',
  phoneHref: 'tel:+27833871136',

  address: {
    lines: ['7 Moffat Drive', 'Ballito, 4420', 'KwaZulu-Natal, South Africa'],
    oneLine: '7 Moffat Drive, Ballito, 4420, KwaZulu-Natal',
    mapQuery: '7 Moffat Drive, Ballito, 4420, South Africa',
  },
  postalAddress: '', // e.g. 'PO Box 123, Ballito, 4420'. Leave '' to hide.
  headOffice: 'Ballito, KwaZulu-Natal',

  // Regions named in the "We operate nationally" copy on the home page.
  regions: ['Gauteng', 'KwaZulu-Natal', 'the Eastern Cape', 'the Western Cape'],

  // --- Social (leave '' to hide an icon) ------------------------------------------
  social: {
    facebook: '',
    linkedin: '',
    instagram: '',
  },

  // --- Footer -------------------------------------------------------------------
  // Industry memberships shown under "Member of:" in the footer. Empty = hidden.
  // Example: { name: 'BFASA', logo: '/images/bfasa.png', url: 'https://bfasa.co.za' }
  memberships: [] as { name: string; logo: string; url?: string }[],
  // "Developed by ..." credit in the bottom bar. Empty name = hidden.
  developerCredit: { name: '', url: '' },
  copyrightHolder: 'Reliance Trading SA (Pty) Ltd',

  // --- Copy that depends on the company's own history -----------------------------
  // The original site claimed "in existence for over 15 years". The new company was
  // registered in 2026, so the default avoids a track-record claim. Edit freely.
  heroIntro:
    `${name} is a specialist property bridging finance company giving sellers, estate agents, ` +
    'bond holders and businesses fast access to funds that would otherwise only be available on registration.',
  aboutIntro:
    `${name} (Pty) Ltd is a property bridging finance company based in Ballito, KwaZulu-Natal, ` +
    'providing short-term bridging finance to individuals and businesses involved in property transactions.',

  // --- Legal / compliance contacts (Privacy Notice + PAIA manual) -------------------
  informationOfficer: {
    name: '[Name of Information Officer]', // TODO: appoint and name the Information Officer
    title: 'Information Officer',
    email: 'info@reliancetrading.co.za',
  },

  // --- Home-page popup ("Bridging finance fast") ---------------------------------------
  popup: {
    enabled: true,
    title: 'Bridging finance fast',
    text: 'For more information, contact us today.',
    buttonLabel: 'Contact us',
    buttonHref: '/contact-us/',
    delayMs: 2500,
    showOnMobile: false, // on phones the card covers most of the screen; set true to show it anyway
  },

  // --- Navigation -----------------------------------------------------------------------
  nav: [
    { label: 'About', href: '/about/' },
    {
      label: 'Services',
      href: '/products/',
      children: [
        { label: 'Seller Advances', href: '/products/seller-advances/' },
        { label: 'Commission Advances', href: '/products/commission-advances/' },
        { label: 'Bond Advances', href: '/products/bond-advances/' },
        { label: 'Property Buyers', href: '/products/property-buyers/' },
        { label: 'Secured Business Loans', href: '/products/secured-business-loans/' },
      ],
    },
    { label: 'FAQs', href: '/faqs/' },
    {
      label: 'Blog',
      href: '/blog/',
      children: [
        { label: 'Bond Advances & Mortgage Finance', href: '/blog/category/bond-advances-mortgage-finance/' },
        { label: 'Bridging Finance', href: '/blog/category/bridging-finance/' },
        { label: 'Financing Options', href: '/blog/category/financing-options/' },
        { label: 'Industry News & Market Insight', href: '/blog/category/industry-news-market-insight/' },
      ],
    },
  ],
  footerMenu: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about/' },
    { label: 'Our Products', href: '/products/' },
    { label: 'Contact Us', href: '/contact-us/' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'PAIA Manual', href: '/paia-manual/' },
  ],
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };
