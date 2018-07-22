import { Infraccion }  from '../model/Infraccion'

export const MOCK_INFRACCIONES = [
    Infraccion.fromJson({
        matricula : '5647JSN',
        fechaDeteccion : new Date(),
        marca : 'SEAT',
        modelo : 'LEON'
    }),
    Infraccion.fromJson({
        matricula : '4589GHJ',
        fechaDeteccion : new Date(),
        marca : 'RENAULT',
        modelo : 'MEGANE'
    })
]