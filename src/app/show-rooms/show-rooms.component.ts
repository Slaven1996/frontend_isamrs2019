import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from '../service/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { dateRentaCar } from '../model/dateRentaCar';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {

  relativeUrlRooms: string;
  
  rooms: Room[];
  hotelName: string;
  today: Date;
  dateFrom: string;
  dateUntil: string;
  numberOfBeds: string;
  relativeUrlQuery: string;


  constructor(private genericService : GenericService, private toastr: ToastrService, private router: Router,
     private route: ActivatedRoute){
       this.relativeUrlRooms = '/hotel_admin/get_rooms';
       this.relativeUrlQuery = '/registered_user/query';
       this.today=new Date();
  }
  ngOnInit() {
    this.getRooms();
    this.hotelName = this.route.snapshot.paramMap.get("hotelName");
  }

  getRooms(){

    this.genericService.getListByName(this.relativeUrlRooms, this.hotelName).subscribe(
      (rooms: Room[]) => {
        this.rooms = rooms;
        if (this.rooms) {
          if (this.rooms.length > 0) {  
            this.toastr.success('Rooms are successfully loaded!');
          }
          else {
            this.toastr.warning('There are no rooms available at the moment!');
          }
        }
        else {
          this.toastr.error('Problem with loading of rooms!');
        }
    },
    error => console.log('Error: ' + JSON.stringify(error))
    );
  
    
  }

  getQueryRooms(){
    this.dateFrom = this.route.snapshot.paramMap.get('dateFrom');
    this.dateUntil = this.route.snapshot.paramMap.get('dateUntil');
    this.numberOfBeds = this.route.snapshot.paramMap.get('numberOfBeds')
    
    this.genericService.findQuery(this.relativeUrlQuery, this.hotelName, this.dateFrom, this.dateUntil, this.numberOfBeds).subscribe(
      (rooms: Room[]) => {
        this.rooms = rooms;
        if (this.rooms) {
          if (this.rooms.length > 0) {  
            this.toastr.success('Available rooms are successfully loaded!');
          }
          else {
            this.toastr.warning('There are no available rooms available at the moment!');
          }
        }
        else {
          this.toastr.error('Problem with loading of the rooms!');
        }
    },
    error => console.log('Error: ' + JSON.stringify(error))
    );
  

    var date1 = new Date (this.dateFrom);
    var date2 = new Date (this.dateUntil);

    var diff = Math.abs(date1.getTime() - date2.getTime());
    //this.broj = Math.ceil(diff / (1000 * 3600 * 24)); 
  
  }



}