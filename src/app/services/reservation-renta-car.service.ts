import { Injectable } from '@angular/core';
import { dateRentaCar} from '../model/dateRentaCar';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
//import { disableBindings } from '@angular/core/src/render3';
import { VehicleReservationDTO } from '../model/vehicle-reservation-DTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationRentaCarService {
  private reservationUrl = "http://localhost:8080/api/reservationRentaCar";
  private reservationSource = new BehaviorSubject<dateRentaCar[]>([]);
  reservationsObservable = this.reservationSource.asObservable();
  private reservations = [];

  constructor(private http: HttpClient, private router: Router) { }

addReservation(dateRentaCar : VehicleReservationDTO) {
  this.http.post<dateRentaCar>(this.reservationUrl, dateRentaCar)
    .subscribe(
      addedReservation =>{
        this.reservations.push(addedReservation);
        this.reservationSource.next(this.reservations);
        alert("Successfully reserved vehicle. New " + dateRentaCar.dateFrom + "<->" +  dateRentaCar.dateUntil + " reservation added.");
        this.router.navigate(["/homepage"])
      }
    )
    
  }
  
}
