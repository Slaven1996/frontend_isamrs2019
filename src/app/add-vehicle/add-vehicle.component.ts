import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { Vehicle } from '../model/vehicle';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  public vehicle: VehicleBackEnd;

  public vehicles: Vehicle[];
  public temp: String;

 



  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) {
      this.vehicle = {model: '', numOfSeats: 0};
     
  }

  ngOnInit() {
    
  }


  
  addVehicle() {
    if (this.vehicle.model !== '') {
      const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post("http://localhost:8080/api/vehicle/addVehicle", this.vehicle, {headers}).subscribe(
        result => { alert("Successfully added vehicle. New " + this.vehicle.model + " vehicle added.");
        this.allVehicles()}
      )
    }
    else {
      this.toastr.error('Morate uneti marku!');
    }
  }

  getVehicles() {
    this.vehicles = [];
    return this.http.get("http://localhost:8080/api/vehicle/getVehicles").subscribe(
      (list: Vehicle[]) => {
        this.vehicles = list;
      }
    );
  }

  allVehicles(){    
    this.router.navigate(["/vehiclesSED"]);
  }

}
