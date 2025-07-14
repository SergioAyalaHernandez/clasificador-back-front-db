import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http: HttpClient) { }

  getRegistros(): Observable<any> {
    return this.http.get('http://18.225.72.0:8080/api/v1/medicamento/');
  }

  agregarRegistro(nombreMedicamento: string, url: string): Observable<any> {
    const body = {
      nombreMedicamento: nombreMedicamento,
      url: url
    };
    return this.http.post<any>('http://18.225.72.0:8080/api/v1/medicamento/', body);
  }

  actualizarRegistro(id: number, nombreMedicamento: string, url: string): Observable<any> {
    const body = {
      nombreMedicamento: nombreMedicamento,
      url: url
    };
    return this.http.put<any>(`http://18.225.72.0:8080/api/v1/medicamento/${id}`, body);
  }

  eliminarRegistro(id: number): Observable<any> {
    return this.http.delete<any>(`http://18.225.72.05:8080/api/v1/medicamento/${id}`);
  }

  getMedicamentoPorId(id: number | undefined): Observable<any> {
    return this.http.get(`http://18.225.72.0:8080/api/v1/medicamento/byid/${id}`);
  }


  getRegistrosTwo(): Observable<any> {
    return this.http.get('http://18.225.72.05:8080/api/eucidiana/tablaA');
  }

  private apiUrl = 'http://18.225.72.0:8080/clasificador/data';

  enviarValores(valorX: number, valorY: number): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, responseType: 'text' as 'json' };
    return this.http.post<string>('http://18.225.72.0.85:8080/clasificador/data', { valorX, valorY }, options);
  }
}
