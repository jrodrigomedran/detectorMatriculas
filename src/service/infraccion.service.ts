import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { MOCK_INFRACCIONES } from '../mock/Infraccion';
import { Infraccion } from '../model/Infraccion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FiltroInfractor } from './api/schema/FiltroInfractor';

@Injectable()
export class InfraccionService
{
    constructor(
        public http: HttpClient
    ){}

    // Para usarlo sin conectar a back-end
    /*public fetchAll(): Promise<Infraccion[]> {
        console.log('infracciones/all');
        return of(MOCK_INFRACCIONES).toPromise();
    }*/

    // Para pedir a back-end
    public fetchAll(): Observable<any>{
        console.log("Petición de todas las infracciones");
        return this.http.get('http://localhost:8000/infracciones');
    }

    public fetchFilter(filter: string): Observable<any>{
        console.log("Petición de todas las infracciones del infractor con DNI: " + filter);
        return this.http.get('http://localhost:8000/infracciones/propietario/'+filter);
    }

    // Para usarlo sin conectar a back-end
    /*public fetchInfraccion(matricula: string): Promise<Infraccion> {
        console.log('infracciones/'+matricula);
        return of(MOCK_INFRACCIONES.find(function(value){return value.matricula == matricula;})).toPromise();
    }*/

    public fetchInfraccion(matricula: string): Observable<any>{
        console.log('infracciones/'+matricula);
        return this.http.get('http://localhost:8000/infracciones/'+matricula);
    }
}