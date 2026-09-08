/**
 * Hardware catalogue. Product images live in public/hardware/ and are
 * sourced from https://www.raster.in/hardware-products.php — an item
 * without `img` renders with its group icon instead.
 */
export const HARDWARE_GROUPS = [
  {
    id: 'cameras',
    icon: 'camera',
    title: 'Cameras & Capture',
    blurb:
      'Broadcast-grade acquisition for operating theatres, studios and film digitisation.',
    items: [
      { label: 'Professional Cameras', img: '/hardware/professional-cameras.jpg' },
      { label: 'Capture and Playback', img: '/hardware/capture-playback.jpg' },
      { label: 'Cintel Scanner', img: '/hardware/cintel-scanner.jpg' },
    ],
  },
  {
    id: 'post',
    icon: 'edit',
    title: 'Post Production',
    blurb:
      'Edit, grade, composite and archive — the complete finishing pipeline.',
    items: [
      { label: 'DaVinci Resolve and Fusion Software', img: '/hardware/davinci-resolve-fusion.png' },
      { label: 'Duplication, Disk Recorders and Storage', img: '/hardware/duplication-disk-recorders-storage.png' },
    ],
  },
  {
    id: 'live',
    icon: 'switcher',
    title: 'Live Production',
    blurb:
      'Multi-camera switching, keying and monitoring for live surgery and events.',
    items: [
      { label: 'ATEM Live Production Switchers', img: '/hardware/atem-switchers.jpg' },
      { label: 'Ultimatte', img: '/hardware/ultimatte.jpg' },
      { label: 'MultiView', img: '/hardware/multiview.jpg' },
    ],
  },
  {
    id: 'signal',
    icon: 'signal',
    title: 'Signal & Distribution',
    blurb:
      'Move any signal anywhere — routed, converted and standards-matched.',
    items: [
      { label: 'Routing and Distribution', img: '/hardware/routing-distribution.jpg' },
      { label: 'Broadcast Converters', img: '/hardware/broadcast-converters.png' },
      { label: 'Standards Conversion', img: '/hardware/standards-conversion.jpg' },
    ],
  },
  {
    id: 'monitoring',
    icon: 'monitor',
    title: 'Monitoring & Test',
    blurb:
      'Confidence monitoring and measurement across the whole signal chain.',
    items: [
      { label: 'Video and Audio Monitoring', img: '/hardware/video-audio-monitoring.png' },
      { label: 'Test Equipment', img: '/hardware/test-equipment.jpg' },
    ],
  },
  {
    id: 'infra',
    icon: 'server',
    title: 'Streaming & Infrastructure',
    blurb:
      'Encode, stream, store and connect — the room behind the room.',
    items: [
      { label: 'Streaming and Encoding', img: '/hardware/streaming-encoding.jpg' },
      { label: 'Servers' },
      { label: 'Accessories', img: '/hardware/accessories.jpg' },
      { label: 'Cables & Adapters', img: '/hardware/cables-adapters.jpg' },
    ],
  },
]
