import { Component } from '@angular/core';
import { FestivoDTO } from '../../interfaces/FestivoDto';
import { DatePipe } from '@angular/common';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-festivo-anio',
  templateUrl: './festivo-anio.component.html',
  styleUrl: './festivo-anio.component.css',
  providers: [DatePipe]
})
export class FestivoAnioComponent {

  constructor(private servicio: FestivosService,
    private servicioDatePipe: DatePipe
  ) {
    this.year = new Date().getFullYear();
  }

  public year: number;
  festivos: FestivoDTO[] = [];

  columnas = [
    { prop: "nombre", name: "Festivo" },
    { prop: "fecha", name: "Fecha", pipe: this.datePipe() }
  ];

  datePipe() {
    return { transform: (value: any) => this.servicioDatePipe.transform(value, 'MM/dd/yyyy') };
  }

  public listar() {
    this.servicio.listar(this.year).subscribe({
      next: response => {
        this.festivos = response;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }
}
