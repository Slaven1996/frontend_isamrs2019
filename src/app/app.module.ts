import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    VehicleSEDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({preventDuplicates: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
