export const CONTACT_INFO = {
  brandTitle: 'Contratación de Planes de Rescate',
  roleLabel: 'Ejecutiva Comercial',
  phone: '56983589813',
  phoneDisplay: '+56 9 8358 9813',
  whatsappMessage: 'Hola, quiero cotizar un plan de rescate. Solicito información comercial.',
  email: '',
  siteUrl: 'https://planrescates.cl/',
  areaServed: 'Chile',
  priceRange: '$$',
  legalDisclaimerShort:
    'Sitio exclusivo para CONTRATACIÓN DE PLANES DE RESCATE. No es servicio de emergencia ni sistema de salud. Si tiene una emergencia vital, llame al 131.',
  legalDisclaimerLong:
    'IMPORTANTE: Este sitio web es un canal comercial independiente para la contratación de planes de rescate y ambulancias privadas. NO SOMOS sistema de salud, NO SOMOS seguro, NO vendemos planes de salud y NO prestamos atención médica integral. NO atendemos emergencias inmediatas ni realizamos rescates directos; coordinamos servicios extrahospitalarios a través de proveedores contratados bajo sus propias condiciones y tiempos de respuesta. En caso de riesgo vital inmediato, comuníquese con el 131 o acuda al centro de urgencia más cercano.'
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}
