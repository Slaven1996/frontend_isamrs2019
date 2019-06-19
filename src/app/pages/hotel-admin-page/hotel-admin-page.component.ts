import { Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from '../../service/generic.service';
import { Room } from '../../model/room';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { LoginService } from '../../services/login.service';
import { HotelForBackend } from '../../model/hotel-backend';

@Component({
  selector: 'app-hotel-admin-page',
  templateUrl: './hotel-admin-page.component.html',
  styleUrls: ['./hotel-admin-page.component.css']
})
export class HotelAdminPageComponent implements OnInit {

  relativeUrlRooms: string;
  rooms: Room[];
  hotelAdmin: User;
  today: Date;
  relativeUrlHotel: string;

  @Output()
  hotel:HotelForBackend;


  constructor(private genericService : GenericService, private toastr: ToastrService, private route: ActivatedRoute, private loginService: LoginService){
       this.relativeUrlRooms = '/hotel_admin/get_rooms';
       this.relativeUrlHotel = '/hotel_admin/get-hotel';
       this.today=new Date();
  }
  ngOnInit() {
    
    this.getHotel();

  }

  getHotel() {
    const currentUser: User = this.loginService.currentUserValue;
    this.genericService.getByName(this.relativeUrlHotel, currentUser.username).subscribe(
      (hotel:HotelForBackend) => {
        this.hotel = hotel;
        this.getRooms();
      },
      error => console.log('Error: ' + JSON.stringify(error))
    );
  }

  getRooms() {

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
