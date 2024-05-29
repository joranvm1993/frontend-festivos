import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FestivoFechaService } from '../../services/festivo-fecha.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
  providers: [DatePipe]
})
export class DatePickerComponent {

  selectedDate?: string;

  constructor(private datePipe: DatePipe, private servicio: FestivoFechaService) { }

  onDateInput(event: MatDatepickerInputEvent<Date>) {
    const date = event.value;
    if (date) {
      this.selectedDate = this.datePipe.transform(date, 'yyyy/MM/dd');
      console.log(this.selectedDate);
    }
  }

  consultarApi() {

    this.servicio.consultarAPI(this.selectedDate)
      .subscribe(
        (data: String) => {
          alert(data)
        },
        (error) => {
          console.log('Error al consultar la api', error)
        }

      )
  }

}
