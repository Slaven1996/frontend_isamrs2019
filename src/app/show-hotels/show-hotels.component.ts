import { Component, OnInit } from '@angular/core';
import { HotelForBackend } from '../model/hotel-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css']
})
export class ShowHotelsComponent implements OnInit {

  hotels: HotelForBackend[];
  relativeUrlForHotels: string;
  relativeUrlForRooms: string;

  


  constructor(private genericService: GenericService, private toastr: ToastrService){
      this.relativeUrlForHotels = '/sys_admin/get_hotels';
      this.relativeUrlForRooms = '/sys_admin/get_rooms';

  }
  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.genericService.getAll(this.relativeUrlForHotels).subscribe(
    (hotels: HotelForBackend[]) => {
      this.hotels = hotels;
      if (this.hotels) {
        if (this.hotels.length > 0) {  
          this.toastr.success('Hotels are successfully loaded!');
        }
        else {
          this.toastr.warning('There are no hotels at the moment!');
        }
      }
      else {
        this.toastr.error('Problem with loading of hotels!');
      }
  },
  error => console.log('Error: ' + JSON.stringify(error))
);

  }

  showRooms() {

  }

}
