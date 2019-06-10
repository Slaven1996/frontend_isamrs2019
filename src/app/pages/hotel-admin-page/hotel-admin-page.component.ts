import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from '../../service/generic.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-hotel-admin-page',
  templateUrl: './hotel-admin-page.component.html',
  styleUrls: ['./hotel-admin-page.component.css']
})
export class HotelAdminPageComponent implements OnInit {

  relativeUrlRooms: string;
  rooms: Room[];
  hotelName: string;
  today: Date;


  constructor(private genericService : GenericService, private toastr: ToastrService){
       this.relativeUrlRooms = '/hotel_admin/get_rooms'
       this.today=new Date();
  }
  ngOnInit() {
    this.getRooms();
  }

  getRooms(){
    this.genericService.getListByName(this.relativeUrlRooms, 'dash').subscribe(
      (rooms: Room[]) => {
        this.rooms = rooms;
        if (this.rooms) {
          if (this.rooms.length > 0) {  
            this.toastr.success('Rooms are successfully loaded!');
          }
          else {
            this.toastr.warning('There are no rooms at the moment!');
          }
        }
        else {
          this.toastr.error('Problem with loading of rooms!');
        }
    },
    error => console.log('Error: ' + JSON.stringify(error))
    );
  }

}
