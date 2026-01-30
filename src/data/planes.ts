export interface PlanRescate {
  id: string
  nombre: string
  precioAnterior?: string
  precio: string
  unidad: string
  descripcion: string
  features: string[]
  destacado: boolean
  etiqueta?: string
}

export const PLANES: PlanRescate[] = [
  {
    id: 'plan-full',
    nombre: 'Plan Full',
    precioAnterior: '0,90 UF',
    precio: '0,59',
    unidad: 'UF / mensual',
    descripcion: 'Beneficios del plan y condiciones claras.',
    features: [
      'Cobertura del plan segun edad y condiciones del proveedor oficial.',
      'Activacion y uso conforme a reglas contractuales.',
      'Servicios incluidos segun el plan contratado.',
      'Detalle transparente de copagos y exclusiones.',
      'Orientacion comercial durante la contratacion.'
    ],
    destacado: true,
    etiqueta: 'Oferta Web'
  },
  {
    id: 'plan-senior',
    nombre: 'Plan Senior',
    precioAnterior: '1,60 UF',
    precio: '1,2',
    unidad: 'UF / mensual',
    descripcion: 'Condiciones preferentes para perfiles senior.',
    features: [
      'Condiciones contractuales definidas por proveedor oficial.',
      'Cobertura del plan con reglas de uso claras.',
      'Beneficios detallados en la propuesta comercial.',
      'Transparencia en limites, copagos y exclusiones.',
      'Gestion de contratacion guiada por ejecutiva autorizada.'
    ],
    destacado: false,
    etiqueta: 'Ideal Adulto Mayor'
  }
]
