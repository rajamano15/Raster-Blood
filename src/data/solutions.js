export const SOLUTION_GROUPS = [
  {
    id: 'radiology',
    icon: 'scan',
    title: 'Radiology',
    blurb:
      'The imaging backbone — capture, archive, read and report every study, wherever the radiologist sits.',
    items: [
      {
        label: 'PACS',
        desc: 'Enterprise image archive and diagnostic viewer — DICOM 3.0, multi-modality, web access.',
      },
      {
        label: 'RIS',
        desc: 'Radiology workflow from order to signed report — scheduling, worklists, reporting.',
      },
      {
        label: 'Teleradiology',
        desc: 'Secure remote reading with routing, prioritisation and turnaround tracking.',
      },
      {
        label: 'DICOM Burner',
        desc: 'Automated patient CD/DVD publishing with an embedded viewer.',
      },
      {
        label: 'DICOM Camera',
        desc: 'Convert non-DICOM sources into standards-compliant studies.',
      },
    ],
  },
  {
    id: 'hospital-management',
    icon: 'hospital',
    title: 'Hospital Management',
    blurb:
      'One operational record for the whole facility — clinical, inventory and financial flows in a single system.',
    items: [
      {
        label: 'IHMS',
        desc: 'Integrated hospital management — OPD/IPD, wards, theatres, stores and finance.',
      },
      {
        label: 'Pharmacy Management',
        desc: 'Formulary, stock, expiry and cold-chain control with reorder automation.',
      },
      {
        label: 'Blood Bank Management',
        desc: 'Donor-to-transfusion traceability with cross-match and inventory control.',
      },
      {
        label: 'EMR',
        desc: 'Longitudinal electronic medical records with clinical decision support.',
      },
      {
        label: 'Lab Information System',
        desc: 'Sample tracking from phlebotomy to verified result release.',
      },
      {
        label: 'Neopead EMR & Charting',
        desc: 'Neonatal & paediatric EMR with growth and drug-dose charting.',
      },
      {
        label: 'Asset Management',
        desc: 'Track, service and audit the medical equipment lifecycle.',
      },
    ],
  },
  {
    id: 'interfacing',
    icon: 'link',
    title: 'Interfacing Applications',
    blurb:
      'The connective tissue — devices, analyzers and third-party systems speaking one language.',
    items: [
      {
        label: 'Lab Equipment Interfacing',
        desc: 'Bidirectional analyzer interfaces — orders in, results back, no re-keying.',
      },
      {
        label: 'IoMT & Interfacing',
        desc: 'Medical device gateways streaming vitals straight into the record.',
      },
      {
        label: 'Electronic Charting',
        desc: 'Bedside vitals and nursing charts, captured digitally at source.',
      },
    ],
  },
  {
    id: 'other',
    icon: 'cast',
    title: 'Other Applications',
    blurb:
      'Where clinical care meets media and identity — from the operating theatre to the patient wrist.',
    items: [
      {
        label: 'OT — Video Broadcasting',
        desc: 'Live surgical video to classrooms, conferences and remote observers.',
      },
      {
        label: 'Telemedicine',
        desc: 'Remote consultation suites with imaging and records access.',
      },
      {
        label: 'Patient ID Wristbands',
        desc: 'Barcode / QR patient identification from admission to discharge.',
      },
    ],
  },
]
