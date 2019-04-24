import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {

  @Input()  rooms: Room[];


  constructor(private toastr: ToastrService){

  }
  ngOnInit() {
  }



}
