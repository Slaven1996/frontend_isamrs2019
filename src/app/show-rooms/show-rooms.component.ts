import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from '../service/generic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {

  relativeUrlRooms: string;
  rooms: Room[];
  hotelName: string;


  constructor(private genericService : GenericService, private toastr: ToastrService, private router: Router,
     private route: ActivatedRoute){
       this.relativeUrlRooms = '/hotel_admin/get_rooms'
  }
  ngOnInit() {
    this.getRooms();
    this.hotelName = this.route.snapshot.paramMap.get("hotelName");
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
