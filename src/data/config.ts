export const CONTACT_INFO = {
  brandTitle: 'Asesoria Comercial de Planes',
  roleLabel: 'Ejecutiva Autorizada',
  phone: '56983589813',
  phoneDisplay: '+56 9 8358 9813',
  whatsappMessage: 'Hola, quiero cotizar un plan y entender las condiciones.',
  email: '',
  siteUrl: 'https://planrescates.cl/',
  areaServed: 'Chile',
  priceRange: '$$',
  legalDisclaimerShort:
    'Sitio de asesoria comercial e intermediacion. No presta servicios operativos ni reemplaza canales oficiales.',
  legalDisclaimerLong:
    'Este sitio es gestionado por una ejecutiva autorizada. Su funcion es la intermediacion y venta de planes. No representa corporativamente a proveedores ni reemplaza canales oficiales.'
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}
