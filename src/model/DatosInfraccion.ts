export class DatosInfraccion
{
    public razon: string;
    public fecha: Date;
    public procedencia: string;

    static fromJson(json : any) : DatosInfraccion {
        let datosInfraccion = new DatosInfraccion();
        Object.assign(datosInfraccion, json);
        return datosInfraccion;
    }
}