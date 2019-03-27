import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';

const routes: Routes = [
  { path: 'add-vehicle', component: AddVehicleComponent},
  { path: 'vehiclesSED', component: VehicleSEDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
