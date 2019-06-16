import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from '../service/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddRoomComponent } from '../add-room/add-room.component';


@Component({
  selector: 'app-show-rooms-admin',
  templateUrl: './show-rooms-admin.component.html',
  styleUrls: ['./show-rooms-admin.component.css']
})
export class ShowRoomsAdminComponent implements OnInit {
  @Input()
  rooms: Room[];

  closeResult: string;
  relativeUrlRooms: string;
  relativeUrlRoomDelete: string;
  
  @Output()
  roomDeleted = new EventEmitter();




  constructor(private genericService : GenericService, private toastr: ToastrService, private router: Router,
     private route: ActivatedRoute){
       this.relativeUrlRoomDelete = '/hotel_admin';
       this.relativeUrlRooms= '/hotel_admin/get_rooms';

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
  

  deleteRoom(id: number){
    this.genericService.delete(this.relativeUrlRoomDelete, id).subscribe(
      (success: boolean) => {
        if (success) {
            this.roomDeleted.emit();
            this.toastr.success('Room is successfully deleted!');
          }
        else {
            this.toastr.warning('Room was not deleted!');
          }
        },     
      error => console.log('Error: ' + JSON.stringify(error))
    );
  }




}

