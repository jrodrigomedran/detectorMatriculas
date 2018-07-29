import { DatosInfraccion } from './DatosInfraccion'
import { Propietario } from './Propietario'

export class Infraccion
{
    public matricula: string;
    public fechaDeteccion: Date;
    public marca: string;
    public modelo: string;
    public urlFoto : string;
    public datosInfraccion : DatosInfraccion;
    public propietario : Propietario;

    constructor() {
    }

    /*static fromJson(json : any) : Infraccion {
        let infraccion = new Infraccion();
        Object.assign(infraccion, json);
        infraccion.datosInfraccion = DatosInfraccion.fromJson(json.datosInfraccion);
        infraccion.propietario = Propietario.fromJson(json.propietario);
        infraccion.urlFoto = "../../assets/img/MATRICULAS_DETECTADAS/MATRICULA_" + infraccion.matricula + ".png";
        return infraccion;
    }*/
}