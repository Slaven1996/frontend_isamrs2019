import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterLink } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-sed',
  templateUrl: './vehicle-sed.component.html',
  styleUrls: ['./vehicle-sed.component.css']
})
export class VehicleSEDComponent implements OnInit {

  public vehicles: Vehicle[];

  public searchParam: string;

  

  constructor(
    private http: HttpClient, 
    private router: Router,
    private vehicleService : VehicleService
    ) { }

  ngOnInit() {
    this.vehicles = [];
    this.getVehicles();
    
  }

  addVehicle(){    
    this.router.navigate(["/add-vehicle"]);
  }

  searchVehicleModel(searchParam){
    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.searchVehiclesModel(searchParam);
  }

  searchVehicleGearBox(searchParam){
    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.searchVehiclesGearBox(searchParam);
  }

  deleteVehicle(id){
    this.vehicleService.deleteVehicle(id);
    
  }

  editVehicle(id){
    this.router.navigate(["/edit-vehicle/"+id]);
  }
  

  getVehicles(){
    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.findAll();
  }
}
