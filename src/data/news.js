/**
 * News & events feed.
 * NOTE: sample placeholder entries and generated poster images — replace
 * with real announcements/photos (keep file names to swap art in place,
 * or point `images` at new files). Newest first; home shows the first three.
 * Regenerate posters with: node scripts/generate-news-images.mjs
 * Body entries are paragraph strings, or { heading, items } for a bulleted list.
 */
export const NEWS_ITEMS = [
  {
    id: 'communication-workshop-2023',
    date: '12 Dec 2023',
    category: 'Event',
    title: 'Communication Workshop - 2023',
    excerpt:
      'An engaging workshop for our employees — activities to enhance interpersonal skills, encourage open dialogue and refine communication across the team.',
    images: [
      {
        src: '/news/communication-workshop-2023-1.jpg',
        alt: 'Raster Images employees gathered for a group photo at the Communication Workshop 2023',
      },
    ],
    body: [
      'At Raster Images, fostering effective communication is paramount. Recently, we conducted an engaging Communication Workshop for our dedicated employees.',
      'The workshop featured a series of activities designed to enhance interpersonal skills, encourage open dialogue, and refine communication strategies within our team. It was a dynamic session aimed at cultivating a more cohesive and communicative work environment, empowering each member to excel in their interactions and collaborations.',
      "We're committed to continual growth, and this workshop was a step towards nurturing stronger connections and clearer communication across our organization.",
    ],
  },
  {
    id: 'dicom-educational-conference-2023',
    date: '9-11 Oct 2023',
    category: 'Event',
    title: 'DICOM Educational Conference - 2023',
    excerpt:
      'Three days of talks and presentations on the DICOM standard — from the basics to DICOMweb™ — overseen by the people behind the standard along with local partners.',
    images: [
      {
        src: '/news/dicom-educational-conference-2023-1.jpg',
        alt: 'Speakers and delegates of the DICOM Educational Conference 2023 gathered on stage for a group photo',
      },
    ],
    body: [
      'The DICOM Education Conference is a series of talks and presentations which was conducted on the 9th, 10th & 11th October overseen by the people behind the standard along with local partners to spread knowledge of the standard. It started with the basics, introducing the concepts of DICOM and went on to cover important aspects of the standard. Recent additions to the standard such as DICOMweb™ were also covered.',
      'The DICOM Education Conference is a great starting point for beginners to learn about Medical Imaging Informatics and also serves as a refresher for those more experienced. This conference was also an opportunity to interact with your peers and gain from their experience.',
      {
        heading: 'Confirmed topics for the DICOM Conference',
        items: [
          'AI Results Encoding',
          'DICOM Cyber 101',
          'DICOM ECG Files Conversion | Heart Diseases Prediction & Progression',
          'DICOM and FHIR, IHE, etc.',
          'DICOM Security - advanced',
          'DICOMweb',
          'Enabling a multi-modal Clinical data repository using openEHR and DICOM',
          'History and future of DICOM',
          'Integration and Implementation Strategies for AI Algorithm Development, Deployment and Enhancement using DICOM and Other Standards',
          'Multi-modal Clinical data repository using openEHR and DICOM',
          'Leveraging DICOM and IHE standards to deploy AI for Diabetic Retinopathy Screening at Vision centres in Rural Tamil Nadu',
        ],
      },
    ],
  },
  {
    id: 'cahotech-2019',
    date: '27 Sep 2019',
    category: 'Event',
    title: 'CAHOTECH - 2019',
    excerpt:
      'The 4th International Healthcare Technology Conference of the Consortium of Accredited Healthcare Organisations, conducted on 27th and 28th September 2019 at Chennai.',
    images: [
      {
        src: '/news/cahotech-2019-1.jpg',
        alt: 'Speaker addressing the audience from the podium on the CAHOTECH 2019 conference stage',
      },
    ],
    body: [
      'CAHOTECH 2019, the 4th International Healthcare Technology Conference of Consortium of Accredited Healthcare Organisations was conducted on 27th and 28th September 2019 at Chennai.',
      'CAHOTECH is a platform for healthcare organisations and technology industry to share and utilise combined experience, to guide themselves continuously towards more efficient practices utilising technological development.',
      'The 2-day event included a pre-conference workshops & masterclasses on the preceding day of the main conference (28th Sep) which highly focused on how to understand future healthcare technologies for clinicians, hospital managers and administrators, biomedical engineers, scientists, researchers and other stakeholders of healthcare industry interested in promoting change through innovation and advancement in healthcare.',
    ],
  },
  {
    id: 'healthcare-conference-2019',
    date: '12 Sep 2019',
    category: 'Event',
    title: 'Healthcare Conference - 2019',
    excerpt:
      'CII Salem organised the First Edition of the “Healthcare Conference” at Radisson Hotel — a strategic platform for healthcare stakeholders from across the region.',
    images: [
      {
        src: '/news/healthcare-conference-2019-1.jpg',
        alt: 'Memento presentation on stage at the CII Healthcare Conference 2019, Confederation of Indian Industry',
      },
    ],
    body: [
      'CII Salem organised the First Edition of “Healthcare Conference” on the 12th September 2019 at Radisson Hotel. The “Healthcare Conference” was designed as a strategic platform where healthcare stakeholders from across the region will congregate to assess and re-examine the steps that need to be taken up for attaining tangible progress in healthcare services.',
      'The conference had lined up an array of professionals to guide the stakeholders on enhancing profitability. Some of the highlighted topics are, “Enhancing profitability through operational excellence”, “Health care analytics”, “Challenges and opportunity in small and medium segment hospitals” and others.',
    ],
  },
  {
    id: 'blood-bank-isbt',
    date: 'Jun 2019',
    category: 'Release',
    title: 'Blood Bank Management adds ISBT 128 labelling',
    excerpt:
      'Standards-compliant unit labels complete the donor-to-transfusion traceability chain.',
    images: [
      { src: '/news/blood-bank-isbt-1.svg', alt: 'Blood unit bag with an ISBT 128 barcode label and transfusion line' },
      { src: '/news/blood-bank-isbt-2.svg', alt: 'ISBT 128 unit label with barcode, data matrix and blood group details' },
      { src: '/news/blood-bank-isbt-3.svg', alt: 'Traceability chain from donor through testing and storage to issue' },
    ],
    body: [
      'Blood Bank Management now prints ISBT 128 unit labels — the international standard for the identification, labelling and information transfer of blood and blood products.',
      'Every unit carries a globally unique donation identification number, machine-readable blood group and expiry, and a data matrix for single-scan verification at the bedside. Cross-match, inventory and issue records link to the same identifier, completing the donor-to-transfusion chain.',
      'The update is available to all Blood Bank Management sites; label stock and scanner requirements are confirmed during the upgrade visit.',
    ],
  },
]
