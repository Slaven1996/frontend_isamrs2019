import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterLink } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-vehicle-sed',
  templateUrl: './vehicle-sed.component.html',
  styleUrls: ['./vehicle-sed.component.css']
})
export class VehicleSEDComponent implements OnInit {

  public vehicles: Vehicle[];

  public searchParam: string;

  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.vehicles = [];
    this.getVehicles();
    
  }

  addVehicle(){
    
    this.router.navigate(["/add-vehicle"]);
  }

  searchVehicles(){
    this.vehicles = [];
    return this.http.get("http://localhost:8080/api/vehicle/searchVehicles/" + this.searchParam).subscribe(
      (list: Vehicle[])=>{
        this.vehicles = list;
      }
    );
  }

  deleteVehicle(id){
    return this.http.delete("http://localhost:8080/api/vehicle/deleteVehicle/" + id).subscribe(
      result => {
        alert("Successfully deleted vehicle with id: " + id);
        window.location.reload();
      }
    )
    
  }

  

  getVehicles(){
    this.vehicles = [];
    return this.http.get("http://localhost:8080/api/vehicle/getVehicles").subscribe(
      (list: Vehicle[])=>{
        this.vehicles = list;
      }
    );
  }
}
