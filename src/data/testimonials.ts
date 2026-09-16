/**
 * Client testimonials shown on the home page.
 *
 * The quotes below are generic starter testimonials. Replace them with real
 * client quotes (name / firm in `name`), or set `showTestimonials = false` to
 * hide the section.
 */
export const showTestimonials = true;

export type Testimonial = { quote: string; name: string };

export const testimonials: Testimonial[] = [
  { quote: 'Top class, speedy service as always. We really appreciate you!', name: 'Client' },
  {
    quote: 'Best news I’ve had all day! Thank you so much – we sincerely appreciate the usual lightning-fast service.',
    name: 'Conveyancing attorney',
  },
  {
    quote: 'Many thanks for the good news, always a pleasure to make use of your services.',
    name: 'Property practitioner',
  },
  { quote: 'Thank you for the excellent service.', name: 'Client' },
  {
    quote: 'Thank you for your quick response. Always a pleasure working with your team.',
    name: 'Attorney',
  },
  {
    quote: 'Most impressed with the promptness and continuous feedback throughout the process.',
    name: 'Property practitioner',
  },
];
