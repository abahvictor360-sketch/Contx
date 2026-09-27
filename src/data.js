export const services = [
  {
    id: 'sea', title: 'Sea Shipping', img: '/images/sea.jpg',
    text: 'Full container load (FCL) and less-than-container load (LCL) ocean freight across 300+ ports, with weekly departures on every major trade lane.',
    points: ['FCL & LCL options', 'Port-to-port or door-to-door', 'Customs clearance included'],
  },
  {
    id: 'air', title: 'Air Shipping', img: '/images/air.jpg',
    text: 'Time-critical cargo moved on scheduled and charter flights, with priority handling and next-flight-out options when every hour counts.',
    points: ['Express & economy service', 'Dangerous goods certified', 'Temperature-controlled cargo'],
  },
  {
    id: 'road', title: 'Road Shipping', img: '/images/multimodal.jpg',
    text: 'Full and part truckload delivery that connects ports, airports and warehouses to your customers, tracked every kilometre of the way.',
    points: ['FTL & LTL trucking', 'Last-mile delivery', 'Live GPS tracking'],
  },
]

export const containers = [
  { id: '20ft', name: '20 Foot Container', price: '$2,400', img: '/images/container-red.jpg', type: 'Standard', capacity: '33 m³', payload: '28,200 kg' },
  { id: '40ft', name: '40 Foot Container', price: '$3,600', img: '/images/containers-hanging.jpg', type: 'Standard', capacity: '67 m³', payload: '26,700 kg' },
  { id: '40hc', name: '40 Foot High Cube', price: '$3,900', img: '/images/container-yard.jpg', type: 'High Cube', capacity: '76 m³', payload: '26,500 kg' },
  { id: 'reefer', name: '20 Foot Reefer', price: '$5,200', img: '/images/export-import.jpg', type: 'Refrigerated', capacity: '28 m³', payload: '27,400 kg' },
  { id: 'reefer40', name: '40 Foot Reefer', price: '$6,800', img: '/images/sea.jpg', type: 'Refrigerated', capacity: '59 m³', payload: '29,000 kg' },
  { id: 'open', name: '40 Foot Open Top', price: '$4,100', img: '/images/ship.jpg', type: 'Open Top', capacity: '65 m³', payload: '26,600 kg' },
]

// Marker positions in the world map's 1010x666 viewBox
export const locations = [
  { id: 'us', x: 205, y: 250, city: 'California, USA', addr: '8502 Preston Rd. Inglewood, CA 90001', phone: '+1 (310) 555-0142' },
  { id: 'ca', x: 250, y: 150, city: 'Toronto, Canada', addr: '2715 Ash Dr. Toronto, ON M5V 2T6', phone: '+1 (416) 555-0198' },
  { id: 'br', x: 330, y: 440, city: 'São Paulo, Brazil', addr: '4140 Parker Rd. São Paulo, SP 01310', phone: '+55 11 5555-0123' },
  { id: 'uk', x: 480, y: 160, city: 'London, UK', addr: '3891 Ranchview Dr. London, EC1A 1BB', phone: '+44 20 5555 0167' },
  { id: 'ng', x: 500, y: 350, city: 'Lagos, Nigeria', addr: '6391 Elgin St. Victoria Island, Lagos', phone: '+234 1 555 0110' },
  { id: 'in', x: 690, y: 290, city: 'Mumbai, India', addr: '1901 Thornridge Cir. Andheri, MH 400053', phone: '+91 22 5555 0134' },
  { id: 'cn', x: 790, y: 220, city: 'Shanghai, China', addr: '2464 Royal Ln. Pudong, SH 200120', phone: '+86 21 5555 0156' },
  { id: 'au', x: 870, y: 500, city: 'Sydney, Australia', addr: '4517 Washington Ave. Sydney, NSW 2000', phone: '+61 2 5555 0189' },
]
