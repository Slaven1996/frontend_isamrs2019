import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddRentacarComponent } from './add-rentacar/add-rentacar.component';
import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { RegistrationComponent} from './registration/registration.component';
import { LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowRentacarsComponent} from './show-rentacars/show-rentacars.component';
import { ShowAirlinesComponent} from './show-airlines/show-airlines.component';




const routes: Routes = [
  { path: 'add-vehicle', component: AddVehicleComponent},
  { path: 'edit-vehicle/:id', component: AddVehicleComponent},
  { path: 'vehiclesSED', component: VehicleSEDComponent},
  { path: 'add-flight', component: AddFlightComponent},
  { path: 'add-hotel', component: AddHotelComponent},
  { path: 'add-airline', component: AddAirlineComponent},
  { path: 'add-rentacar', component: AddRentacarComponent},
  { path: 'show-hotels' , component: ShowHotelsComponent},
  { path: 'add-admin'  , component: AddAdminComponent},
  { path: '', // localhost:4200 redirect to localhost:4200/home-page
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'homepage', component: HomePageComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
