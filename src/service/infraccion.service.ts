import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MOCK_INFRACCIONES } from '../mock/Infraccion';
import { Infraccion } from '../model/Infraccion';

export class InfraccionService
{
    public fetchAll(): Promise<Infraccion[]> {
        console.log('infracciones/all');
        return of(MOCK_INFRACCIONES).toPromise();
    }

    public fetchInfraccion(matricula: string): Promise<Infraccion> {
        console.log('infracciones/'+matricula);
        return of(MOCK_INFRACCIONES.find(function(value){return value.matricula == matricula;})).toPromise();
    }
}