import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

const routes: Routes = [
  { path: 'add-vehicle', component: AddVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
