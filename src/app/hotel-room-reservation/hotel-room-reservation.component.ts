import { Component, OnInit } from '@angular/core';
import { dateRentaCar } from '../model/dateRentaCar';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomQuery } from '../model/room-query';

@Component({
  selector: 'app-hotel-room-reservation',
  templateUrl: './hotel-room-reservation.component.html',
  styleUrls: ['./hotel-room-reservation.component.css']
})
export class HotelRoomReservationComponent implements OnInit {

    public roomQuery: RoomQuery;
    public hotelName: string;

  constructor( private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { 
    this.roomQuery = {hotelName: '', dateFrom: '', dateUntil: '', numberOfBeds: '', roomId:''};
  }

  ngOnInit() {
    this.hotelName = this.route.snapshot.paramMap.get('hotelName');
  }

  checkDate(){
    let dateFrom: Date = new Date(this.roomQuery.dateFrom);
    let dateUntil:  Date = new Date(this.roomQuery.dateUntil);
    let currentDate: Date = new Date();  

    if(dateFrom < currentDate){
      alert("Molimo unesite datum u buducnosti!")
    }
    else if(dateUntil < dateFrom){
      alert("Pocetni datum mora biti pre datuma zavrsetka boravka!")
    }
    else{      
      this.router.navigate(["show-rooms/" + this.hotelName  + "/" + this.roomQuery.dateFrom +"/" + this.roomQuery.dateUntil +"/" + this.roomQuery.numberOfBeds]);
    }
  }


}