/**
 * Client testimonials shown on the home page.
 *
 * PLACEHOLDERS: the testimonials on the original site are COD Bridging Finance's
 * clients thanking COD staff by name, so they cannot be reused. The entries below
 * are neutral samples marked "(sample)". Replace them with real quotes, or set
 * `showTestimonials = false` to hide the section until you have some.
 */
export const showTestimonials = true;

export type Testimonial = { quote: string; name: string };

export const testimonials: Testimonial[] = [
  { quote: 'Top class, speedy service as always. We really appreciate you!', name: 'Client (sample)' },
  {
    quote: 'Best news I’ve had all day! Thank you so much – we sincerely appreciate the usual lightning-fast service.',
    name: 'Conveyancing attorney (sample)',
  },
  {
    quote: 'Many thanks for the good news, always a pleasure to make use of your services.',
    name: 'Property practitioner (sample)',
  },
  { quote: 'Thank you for the excellent service.', name: 'Client (sample)' },
  {
    quote: 'Thank you for your quick response. Always a pleasure working with your team.',
    name: 'Attorney (sample)',
  },
  {
    quote: 'Most impressed with the promptness and continuous feedback throughout the process.',
    name: 'Property practitioner (sample)',
  },
];
