import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';
import { FestivoDTO } from '../interfaces/FestivoDto';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {

  url: string;
  constructor(private http: HttpClient) {

    this.url = `${environment.urlBase}festivos/`;
  }

  public listar(year: number): Observable<FestivoDTO[]> {
    return this.http.get<FestivoDTO[]>(`${this.url}listar/${year}`);
  }
}
