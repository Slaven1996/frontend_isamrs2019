import { Component, OnInit, Input } from '@angular/core';
import { HotelForBackend } from '../model/hotel-backend';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  @Input()
  hotel: HotelForBackend;

  constructor() { }

  ngOnInit() {
  }

}
