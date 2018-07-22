import { Infraccion }  from '../model/Infraccion'

export const MOCK_INFRACCIONES = [
    Infraccion.fromJson({
        matricula : '5649JSN',
        fechaDeteccion : new Date(),
        marca : 'SEAT',
        modelo : 'LEON',
        urlFoto : '../assets/img/MATRICULAS_DETECTADAS/MATRICULA_5649JSN.png'
    }),
    Infraccion.fromJson({
        matricula : '6086DNF',
        fechaDeteccion : new Date(),
        marca : 'PEUGEOT',
        modelo : '407',
        urlFoto : '../assets/img/MATRICULAS_DETECTADAS/MATRICULA_6086DNF.png'
    }),
    Infraccion.fromJson({
        matricula : '6947FNC',
        fechaDeteccion : new Date(),
        marca : 'VOLKSWAGEN',
        modelo : 'POLO',
        urlFoto : '../assets/img/MATRICULAS_DETECTADAS/MATRICULA_6947FNC.png'
    })
]