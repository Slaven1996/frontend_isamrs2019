import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { GenericService } from './service/generic.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddRentacarComponent } from './add-rentacar/add-rentacar.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


//import { NgbdTimepickerBasic } from './timepicker-basic';
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';




@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    VehicleSEDComponent,
    AddFlightComponent,
    AddHotelComponent,
    AddAirlineComponent,
    AddRentacarComponent,
    AddAdminComponent,
    ShowHotelsComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
   // OwlDateTimeModule,
   // OwlNativeDateTimeModule,
    ToastrModule.forRoot({preventDuplicates: true})

  ],
  providers: [
    GenericService,
    { provide: 'BASE_API_URL', useValue: 'http://localhost:8080/api' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
