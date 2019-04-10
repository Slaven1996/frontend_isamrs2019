import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddRentacarComponent } from './add-rentacar/add-rentacar.component';



const routes: Routes = [
  { path: 'add-vehicle', component: AddVehicleComponent},
  { path: 'edit-vehicle/:id', component: AddVehicleComponent},
  { path: 'vehiclesSED', component: VehicleSEDComponent},
  { path: 'add-flight', component: AddFlightComponent},
  { path: 'add-hotel', component: AddHotelComponent},
  { path: 'add-airline', component: AddAirlineComponent},
  { path: 'add-rentacar', component: AddRentacarComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
