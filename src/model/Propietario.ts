export class Propietario
{
    public nombreCompleto: string;
    public direccion: string;
    public dni: string;

    static fromJson(json : any) : Propietario {
        let propietario = new Propietario();
        Object.assign(propietario, json);
        return propietario;
    }
}