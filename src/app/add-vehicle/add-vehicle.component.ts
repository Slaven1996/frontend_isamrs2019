import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  public vehicle: VehicleBackEnd;

  public vehicles: Vehicle[];



  constructor(private http: HttpClient) {
      this.vehicle = {model: '', numOfSeats: 0};
      this.getVehicles();
  }

  ngOnInit() {
  }




  getVehicles(){
    this.vehicles = [];

    return this.http.get("http://localhost:8080/api/rentacar/getVehicles").subscribe(
      (list: Vehicle[])=>{
        this.vehicles = list;
      }
    );
  }




}
