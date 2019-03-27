import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-vehicle-sed',
  templateUrl: './vehicle-sed.component.html',
  styleUrls: ['./vehicle-sed.component.css']
})
export class VehicleSEDComponent implements OnInit {

  public vehicles: Vehicle[];

  public searchParam: string;

  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.vehicles = [];
    this.getVehicles();
    
  }

  searchVehicles(){
    this.vehicles = [];
    return this.http.get("http://localhost:8080/api/rentacar/searchVehicles/" + this.searchParam).subscribe(
      (list: Vehicle[])=>{
        this.vehicles = list;
      }
    );
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
