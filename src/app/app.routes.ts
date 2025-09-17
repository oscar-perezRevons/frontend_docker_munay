import { Routes } from '@angular/router';
import { Hoteles } from './pages/hoteles/hoteles';
import { HotelDetalle } from './pages/hotel-detalle/hotel-detalle';

export const routes: Routes = [
  { path: 'hoteles/:id', component: HotelDetalle},
  { path: 'hoteles', component: Hoteles},
  { path: '', redirectTo: 'hoteles', pathMatch: 'full' }
];
