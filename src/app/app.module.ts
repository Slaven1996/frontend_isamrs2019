import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { GenericService } from './service/generic.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
//import { NgbdTimepickerBasic } from './timepicker-basic';
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';




@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    VehicleSEDComponent,
    AddFlightComponent,
    AddHotelComponent
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
