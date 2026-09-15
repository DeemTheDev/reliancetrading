/** Frequently asked questions (FAQs page). Order is preserved. */
import { site } from '../config/site';

const co = site.name;

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How long will it take before I receive the funds?',
    a:
      'While we strive for a same-day turnaround, a lot depends on the client and the conveyancing firm and how ' +
      'quickly they provide our Credit Department with the requested information / documentation.',
  },
  {
    q: 'What is the procedure for applying for bridging finance?',
    a:
      'On receipt of an enquiry for bridging finance, we email the conveyancing attorneys a list of documents and ' +
      'information required from them. This information is required by our Credit Department to come to a credit ' +
      'decision and to draft the necessary bridging finance agreement for signature by the client. After the client ' +
      'has signed, the agreement is forwarded to the conveyancing attorneys for an undertaking. The undertaking is a ' +
      'promise by the conveyancing attorneys to us to pay us back the capital amount advanced together with our fee ' +
      'on registration of transfer of the property in question. If approved by Credit, payments are usually made ' +
      'before 3.30pm on the day. Immediate payments are possible and can be arranged for an additional fee.',
  },
  {
    q: 'How do I repay?',
    a:
      'The conveyancing attorney, acting as the “middleman” between ourselves and you, settles the bridging finance ' +
      'from the surplus sale proceeds due to you on transfer.',
  },
  {
    q: 'Is this a loan?',
    a:
      'No, the underlying agreement is a discounting agreement. We purchase and take cession of your claim to receive ' +
      'surplus sale proceeds on registration of your property transaction. Ownership in and to the claim passes to us ' +
      'upon signature of the agreement, however our right to payment arises only on the registration date and not before.',
  },
  {
    q: 'How much do I qualify for?',
    a:
      'Our Credit Department will consider any amount up to 80% of the available equity but much will depend on the ' +
      'credit profile of the particular transaction. For example, if you are due R500 000 surplus proceeds from the ' +
      'sale of your property, we can consider up to 80% of this amount, R400 000.',
  },
  {
    q: 'I am a purchaser of a property – can I apply for bridging finance?',
    a:
      'Our Credit Department will only consider such an application if the buyer has received an approved bond grant ' +
      'in an amount higher than the purchase price. For example, the purchase price for the property is R1 000 000 and ' +
      'the purchaser’s approved bond is for R1 250 000, which includes an allocation for his/her transfer and bond ' +
      'costs. In these instances, the purchaser often requires upfront bridging finance to pay for the transfer duty ' +
      'as he/she may not have the cash on hand to settle same. We could assist by bridging a portion of the R250 000 ' +
      'surplus available to the purchaser.',
  },
  {
    q: 'Are there any additional costs that I will be liable for?',
    a:
      'Generally speaking, no. However, our Credit Department may set a minimum fee (usually 18–22 days) if the ' +
      'transaction has already been lodged in the Deeds Office.',
  },
  {
    q: 'Do you only bridge property sale proceeds?',
    a:
      'No, we also bridge estate agents’ commission and, on occasion, transfer duty / costs for purchasers with ' +
      'approved bonds greater than the purchase price of the property they have purchased.',
  },
  {
    q: 'I am an estate agent – how do I bridge my commission?',
    a:
      'First you will need to register with our Credit Department. This is a quick once-off procedure, at the end of ' +
      'which you will be provided with a pre-populated bridging finance agreement for your use whenever you wish to ' +
      'bridge your commission. This agreement would need to be completed, signed and submitted to our Credit ' +
      'Department together with a copy of the OTP and a consent document signed off by your Principal.',
  },
  {
    q: 'I have a poor credit record – can I apply for bridging finance?',
    a:
      'Whilst we do consider a client’s credit record in assessing their application, it is only one of several ' +
      'factors that we take into account. Other factors could include the amount applied for, whether we have a prior ' +
      'relationship with the transfer attorneys, the amount of equity in the transaction, the value of the property, ' +
      'the stage of the transfer (advanced or in early stages) and so on. We are always available to discuss these ' +
      'types of questions so please do not hesitate to reach out if in doubt.',
  },
  {
    q: 'My company has sold a property and I want to bridge the sale proceeds – do I need to stand surety for the company?',
    a:
      'In most cases we do require the Directors of the company to stand surety for the company’s debt; however, this ' +
      'may not be necessary if the amount applied for is below R75 000 and is for payment of rates.',
  },
  {
    q: 'I am a Developer and require finance to fund my development to completion – can I apply for bridging finance?',
    a:
      'Due to the inherently risky nature of new developments, we will generally only consider advancing finance once ' +
      'the unit / property in question has been built and all applicable consents / certificates (e.g. NHBRC enrolment ' +
      'and completion, approved SG diagrams / plans, Occupancy Certificate, etc.) are in place. If the development is ' +
      'not this far advanced, we might consider finance but would require alternative security, such as a bond over ' +
      'property or the like.',
  },
  {
    q: 'My company has sold a property and I want to bridge the sale proceeds – what documents would I need to sign in order to submit an application for finance?',
    a:
      'As the company is a separate legal entity from its Directors / Shareholders, it would be necessary for all the ' +
      'Directors of the company to sign a Resolution authorising the bridging finance application. There may be ' +
      'additional documents such as a personal deed of suretyship (see above) that would also be required. Our Credit ' +
      'Department would draft all of the required documents and would be on hand to talk you through the process.',
  },
  {
    q: `Do I need to arrange all of the supporting documents and information for my bridging finance application or does ${co} do this?`,
    a:
      `${co} liaises with the transfer attorneys directly for the necessary supporting documents, keeping you informed ` +
      `throughout the process. Once ${co}’s Credit Department is satisfied that everything is in order, ${co} will ` +
      'draft the necessary bridging finance agreement for your signature and return. Whilst we strive for a 24-hour ' +
      '(or less) turnaround time, much depends on how quickly the client and attorneys provide / return the necessary ' +
      'documents. Once approved, we can attend to an immediate payment should it be required.',
  },
  {
    q: 'I require bridging finance but am not involved in a property transaction – can I bridge monies due to my business?',
    a:
      'This may fall under our Mezzanine Finance offering. Briefly, Mezzanine Finance refers to a short-term secured ' +
      'business loan of not less than R250 000 to a legal entity (e.g. company, CC or Trust), repayable within a ' +
      'maximum period of 12 months. Please contact us should you be interested in this product.',
  },
];
