import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { FestivoAnioComponent } from '../components/festivo-anio/festivo-anio.component';

const routes: Routes = [
  // Redirige a 'home' por defecto
  { path: 'festivosFecha', component: DatePickerComponent },
  { path: 'festivosAnio', component: FestivoAnioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
