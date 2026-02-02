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
    nombre: 'FULL RESCUE',
    precio: '0,59',
    unidad: 'UF',
    descripcion: 'Emergencias y Urgencias Médicas.',
    features: [
      'Rescate de Emergencias Médicas.',
      'Atención Programada de Urgencias Médicas.',
      'Orientación de Salud Telefónica.'
    ],
    destacado: true,
    etiqueta: 'Más Contratado'
  },
  {
    id: 'plan-senior',
    nombre: 'SENIOR',
    precio: '1,0',
    unidad: 'UF',
    descripcion: 'Protección para adultos desde 75 años.',
    features: [
      'Rescate ante Emergencias con Riesgo Vital y/o Urgencias Médicas.',
      'Asistencia de salud COPAGO $0 en Centros Médicos.',
      'Hasta 25% de descuento en Servicios de Salud a Domicilio.'
    ],
    destacado: false,
    etiqueta: 'Adultos 75+'
  }
]
