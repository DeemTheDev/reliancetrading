/**
 * The five products / services. Drives the Services page, each product's own
 * page, the "What we focus on" section on the home page, the About page list
 * and the Bridging Checklist page.
 */
import { site } from '../config/site';

const co = site.name.toUpperCase(); // written in caps in the copy, as on the original site

export type Product = {
  slug: string;
  title: string;
  label: 'Finance' | 'Property';
  heroSubtitle: string;
  /** short paragraph used on the Services overview */
  summary: string;
  /** full paragraph(s) used at the top of the product page */
  intro: string[];
  /** documents typically required to assess an application */
  requires?: string[];
  /** conditions for pay-out */
  paysOutWhen?: string[];
  /** free-form bullets (used by Secured Business Loans instead of the two lists) */
  bullets?: { heading: string; items: string[] };
  image: string;
  /** Home page "What we focus on" block */
  focus?: { title: string; text: string };
};

export const products: Product[] = [
  {
    slug: 'seller-advances',
    title: 'Seller Advances',
    label: 'Finance',
    heroSubtitle: 'We offer a full range of financial services',
    summary:
      `${co} provides SELLERS of residential and commercial properties with up-front access to 80% of the ` +
      'surplus sale proceeds that would otherwise only be available to them on transfer of their properties.',
    intro: [
      `${co} provides SELLERS of residential and commercial properties with up-front access to 80% of the ` +
        'surplus sale proceeds that would otherwise only be available to them on transfer of their properties. ' +
        'This finance may be used to fund costs related to the sale (for example to pay outstanding rates and ' +
        'levies), to fund the acquisition of another property, or for any purpose whatsoever.',
    ],
    requires: [
      'Copy of the sale agreement / offer to purchase',
      'Proof of finance, i.e. bond instruction and/or guarantees and/or proof of funds in Trust',
      'Bond cancellation figures, if applicable',
      'Rates statement',
      'Home owners / levy statement, if applicable',
    ],
    paysOutWhen: [
      `The client has signed ${co}’s Master Discounting Agreement`,
      'All material conditions in the sale agreement have been fulfilled',
      '100% of the purchase price has been secured',
      'On receipt of a Letter of Undertaking or bank guarantee from the transferring attorneys',
      `${co}’s Credit team has approved the application`,
    ],
    image: '/images/product-seller-advances.svg',
    focus: {
      title: 'Sellers of residential and commercial properties',
      text:
        `${co} provides SELLERS of residential and commercial properties with immediate access to surplus sale ` +
        'proceeds that would ordinarily only be available to them on transfer of their properties.',
    },
  },
  {
    slug: 'commission-advances',
    title: 'Commission Advances',
    label: 'Finance',
    heroSubtitle: 'We offer a full range of financial services',
    summary:
      `${co} gives registered Estate Agents and Agencies up-front access to 80% of their nett commission ` +
      'proceeds ordinarily only available to them on registration of transfer.',
    intro: [
      `${co} gives registered Estate Agents and Agencies up-front access to 80% of their nett commission ` +
        'proceeds ordinarily only available to them on registration of transfer.',
    ],
    requires: [
      'Copy of the sale agreement / offer to purchase',
      'Proof of finance, i.e. bond instruction and/or guarantees and/or proof of funds in Trust',
    ],
    paysOutWhen: [
      `${co}’s Credit Department has sanctioned the Agent or Agency, as the case may be`,
      `The Agent / Agency has signed ${co}’s Master Discounting Agreement`,
      'If an “Agent commission” application, the Principal of the Agency concerned has consented to the Agent applying for bridging finance',
      '100% of the purchase price has been secured',
      'A Letter of Undertaking or bank guarantee has been received from the transferring attorneys',
      `${co}’s Credit team has approved the application`,
    ],
    image: '/images/product-commission-advances.svg',
    focus: {
      title: 'Estate agent commissions',
      text: 'Advances of up to 80% of net commissions due to approved Estate Agents.',
    },
  },
  {
    slug: 'bond-advances',
    title: 'Bond Advances',
    label: 'Property',
    heroSubtitle: 'We offer a full range of financial services',
    summary:
      `${co} provides owners of residential or commercial properties with approved new or further bonds, ` +
      'up-front access to 80% of the nett bond / loan proceeds that would ordinarily only be available to them ' +
      'on registration of the bond.',
    intro: [
      `${co} provides owners of residential or commercial properties with approved new or further bonds, ` +
        'up-front access to 80% of the nett bond / loan proceeds that would ordinarily only be available to them ' +
        'on registration of the bond.',
    ],
    requires: [
      'Copy of the bond instruction',
      'Copy of the bond attorney’s pro forma statement of account detailing all deductions from the bond / loan proceeds',
      'Bond cancellation figures (if a switch bond is involved)',
    ],
    paysOutWhen: [
      `The client has signed ${co}’s Master Discounting Agreement`,
      'All suspensive conditions pertaining to the bond grant have been fulfilled',
      'A Letter of Undertaking or bank guarantee has been received from the bond attorneys',
      `${co}’s Credit team has approved the application`,
    ],
    image: '/images/product-bond-advances.svg',
    focus: {
      title: 'Bond advances',
      text:
        `${co} gives OWNERS of residential and commercial properties with approved first or further bonds ` +
        'immediate access to surplus bond / loan proceeds that would otherwise only be available to them on ' +
        'registration of the bond in question.',
    },
  },
  {
    slug: 'property-buyers',
    title: 'Property Buyers',
    label: 'Property',
    heroSubtitle: 'We offer a full range of financial services',
    summary:
      `${co} will provide finance to property Buyers for the payment of transfer duty and costs, either where ` +
      'a bond has been secured or the proceeds from a prior sale are being used to cover these costs.',
    intro: [
      `${co} will provide finance to property Buyers for the payment of transfer duty and costs, either where ` +
        'a bond has been secured or the proceeds from a prior sale are being used to cover these costs. These ' +
        'costs have to be paid upfront to the conveyancer but the funds will only become available upon ' +
        'registration of transfer.',
    ],
    requires: ['Proof of finance exceeding the sale price', 'Copy of the sale agreement', 'Attorney’s statement of account'],
    paysOutWhen: [
      `The client has signed ${co}’s Master Discounting Agreement`,
      'All material conditions in the sale agreement have been fulfilled',
      '100% of the purchase price has been secured',
      'On receipt of a Letter of Undertaking or bank guarantee from the transferring attorneys',
      `${co}’s Credit team has approved the application`,
    ],
    image: '/images/product-property-buyers.svg',
  },
  {
    slug: 'secured-business-loans',
    title: 'Secured Business Loans',
    label: 'Finance',
    heroSubtitle: 'We offer a full range of financial services',
    summary:
      `${co} advances short-term secured loans of R250 000 or more to BUSINESS ENTITIES that are able to ` +
      'demonstrate a satisfactory repayment strategy.',
    intro: [],
    bullets: {
      heading: 'Also known as Mezzanine Finance or Bridge Loans',
      items: [
        'Secured loans of R250 000 or more to Juristic Persons (Companies, Close Corporations, Trusts with a minimum ' +
          'of 3 Trustees) for terms not exceeding 6 – 9 months.',
        'This product allows businesses to raise additional working capital when they have exhausted their traditional ' +
          'bank facilities. The finance is not transaction or invoice based; rather the borrower offers alternative ' +
          'tangible forms of security – typically a 1st bond over property – and a definite repayment mechanism. ' +
          'Payment of the loan is typically made on signature of the securities and not on registration thereof.',
      ],
    },
    image: '/images/product-secured-business-loans.svg',
    focus: {
      title: 'Secured loans',
      text: `${co} advances short-term secured loans to BUSINESS ENTITIES that are able to demonstrate satisfactory repayment strategies.`,
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
