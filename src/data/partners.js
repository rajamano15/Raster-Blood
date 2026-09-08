/**
 * Partner roster. Logos and product photos live in public/partners/ and are
 * sourced from https://www.raster.in/partners.php — each partner card shows
 * its `products` as a rotating carousel, with `links` listed underneath.
 */
export const PARTNERS = [
  {
    id: 'blackmagic-design',
    name: 'Blackmagicdesign',
    links: [{ label: 'https://www.blackmagicdesign.com/', href: 'https://www.blackmagicdesign.com/' }],
    logo: '/partners/blackmagic/logo.jpg',
    products: [
      { src: '/partners/blackmagic/2110-ip-converter-3x3g.jpg', label: '2110 IP Converter 3x3G' },
      { src: '/partners/blackmagic/2110-ip-converter-4x12g-pwr.jpg', label: '2110 IP Converter 4x12G PWR' },
      { src: '/partners/blackmagic/2110-ip-mini-bidirect-12g-sfp.jpg', label: '2110 IP Mini BiDirect 12G SFP' },
      { src: '/partners/blackmagic/2110-ip-presentation-converter.jpg', label: '2110 IP Presentation Converter' },
      { src: '/partners/blackmagic/videohub-master-control-pro.jpg', label: 'Videohub Master Control Pro' },
      { src: '/partners/blackmagic/videohub-smart-control-pro.jpg', label: 'Videohub Smart Control Pro' },
    ],
  },
  {
    id: 'canon',
    name: 'Canon India Pvt Ltd.',
    links: [
      {
        label: 'Canon Photography',
        href: 'https://in.canon/en/consumer/products/search?category=photography&subCategory=interchangeable-lens-cameras',
      },
      {
        label: 'Cinematography Solutions',
        href: 'https://in.canon/en/consumer/products/search?category=videography-solutions&subCategory=camcorders',
      },
    ],
    logo: '/partners/canon/logo.png',
    products: [
      { src: '/partners/canon/certificate.jpg', label: 'Canon Authorised Reseller Certificate' },
      { src: '/partners/canon/xa75.png', label: 'XA75' },
      { src: '/partners/canon/xc15.png', label: 'XC15' },
      { src: '/partners/canon/me20f-sh.png', label: 'ME20F-SH' },
      { src: '/partners/canon/eos-r1.png', label: 'EOS R1' },
      { src: '/partners/canon/eos-r8.png', label: 'EOS R8' },
      { src: '/partners/canon/eos-3000d-kit.png', label: 'EOS 3000D Kit EF-S 18-55 II' },
    ],
  },
  {
    id: 'primera',
    name: 'Primera Technology Inc.',
    links: [{ label: 'https://www.primera.com/', href: 'https://www.primera.com/' }],
    logo: '/partners/primera/logo.jpg',
    products: [
      { src: '/partners/primera/bravo-4052-blu-disc-publisher.jpg', label: 'Bravo 4052 Blu Disc Publisher' },
      { src: '/partners/primera/bravo-se3.jpg', label: 'Bravo SE-3' },
      { src: '/partners/primera/catalyst-v8.jpg', label: 'Catalyst V8' },
      { src: '/partners/primera/evoloader.jpg', label: 'evoLoader' },
      { src: '/partners/primera/ip60.jpg', label: 'IP60' },
      { src: '/partners/primera/lx500-color-printer.jpg', label: 'LX500 Color Printer' },
    ],
  },
  {
    id: 'idenpro',
    name: 'Idenpro',
    links: [{ label: 'https://www.idenpro.com/', href: 'https://www.idenpro.com/' }],
    logo: '/partners/idenpro/logo.jpg',
    products: [
      { src: '/partners/idenpro/inkjet-wristbands.jpg', label: 'Inkjet Wristbands' },
      { src: '/partners/idenpro/tm-snap.jpg', label: 'Thermal Wristband Printing' },
      { src: '/partners/idenpro/band.jpg', label: 'Printed Patient Wristbands' },
      { src: '/partners/idenpro/clip-closure.jpg', label: 'Clip Closure Wristbands' },
    ],
  },
]
