import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoFechaService {

  url: string;
  constructor(private http: HttpClient) {

    this.url = `${environment.urlBase}festivos/`;
  }

  public consultarAPI(fecha: string ): Observable<string> {
    return this.http.get<string>(`${this.url}verificar/${fecha}`);
  }

}
