import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../model/vehicle';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { VehicleService } from '../services/vehicle.service';
import { dateRentaCar } from '../model/dateRentaCar';
import { VehicleSEDComponent } from '../vehicle-sed/vehicle-sed.component';

@Component({
  selector: 'app-renta-car-reservation',
  templateUrl: './renta-car-reservation.component.html',
  styleUrls: ['./renta-car-reservation.component.css']
})
export class RentaCarReservationComponent implements OnInit {
    public dateReservation: dateRentaCar;
    public id: number;

  constructor(
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute, 
  ) { 
    this.dateReservation = {id: '', dateFrom: '', dateUntil: '', numberOfSeats: '', vehicleId:''};
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  checkDate(){
    //this.vehicleSED.getVehiclesByDate(this.dateReservation.dateFrom, this.dateReservation.dateUntil, this.id);
    this.router.navigate(["/vehiclesSED/" + this.dateReservation.dateFrom +"/" + this.dateReservation.dateUntil +"/" + this.dateReservation.numberOfSeats + "/" +  this.id]);
  }


}
