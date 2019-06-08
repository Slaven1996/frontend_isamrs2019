import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { VehicleService } from '../services/vehicle.service';
import { dateRentaCar } from '../model/dateRentaCar';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { RentaCarReservationComponent } from '../renta-car-reservation/renta-car-reservation.component';
import { ReservationRentaCarService } from '../services/reservation-renta-car.service';
import { VehicleReservationDTO } from '../model/vehicle-reservation-DTO';

@Component({
  selector: 'app-vehicle-sed',
  templateUrl: './vehicle-sed.component.html',
  styleUrls: ['./vehicle-sed.component.css']
})
export class VehicleSEDComponent implements OnInit {

  public vehicles: Vehicle[];
  
  public searchParam: string;

  public rentaCarID: number;
  public dateFrom: string;
  public dateUntil: string;
  public numberOfSeats: string;

  public rentaCarAdmin: User;  


  constructor(
    private http: HttpClient, 
    private router: Router,
    private vehicleService : VehicleService,
    private route: ActivatedRoute,
    private loginService : LoginService,
    private reservationService: ReservationRentaCarService
    ) 
    {
    }

  ngOnInit() {
    const currentUser: User = this.loginService.currentUserValue;
    if(currentUser.userType == "RENTACAR_ADMIN"){
      this.rentaCarAdmin = currentUser;
    }


    this.vehicles = [];
    if(this.router.url != "/vehiclesSED"){
      this.getVehiclesByDate();
    }
    else{      
      this.getVehicles();
    }    
  }
  
  reserveVehicle(id : number){
    let reservation : VehicleReservationDTO= { 
      dateFrom: this.route.snapshot.paramMap.get('dateFrom'),
      dateUntil: this.route.snapshot.paramMap.get('dateUntil'),
      vehicleId: id
    };
    this.reservationService.addReservation(reservation);
    
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
  
  getVehiclesByDate(){
    this.rentaCarID = +this.route.snapshot.paramMap.get('id');
    this.dateFrom = this.route.snapshot.paramMap.get('dateFrom');
    this.dateUntil = this.route.snapshot.paramMap.get('dateUntil');
    this.numberOfSeats = this.route.snapshot.paramMap.get('numberOfSeats')
    
    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.findVehiclesByRentaCarId(this.dateFrom, this.dateUntil,this.numberOfSeats, this.rentaCarID);
    
  }

  
}
