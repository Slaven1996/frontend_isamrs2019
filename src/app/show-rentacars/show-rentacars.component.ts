import { Component, OnInit } from '@angular/core';
import { RentacarForBackend } from '../model/rentacar-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-show-rentacars',
  templateUrl: './show-rentacars.component.html',
  styleUrls: ['./show-rentacars.component.css']
})
export class ShowRentacarsComponent implements OnInit {

  rentacars: RentacarForBackend[];
  relativeUrlForRentacars: string;
  relativeUrlForBranchOffices: string;

  


  constructor(private genericService: GenericService, private toastr: ToastrService, private router: Router){
      this.relativeUrlForRentacars = '/sys_admin/get_rentacars';
      this.relativeUrlForBranchOffices = '/';

  }
  ngOnInit() {
    this.getRentacars();
  }

  getRentacars() {
    this.genericService.getAll(this.relativeUrlForRentacars).subscribe(
    (rentacars: RentacarForBackend[]) => {
      this.rentacars = rentacars;
      if (this.rentacars) {
        if (this.rentacars.length > 0) {  
          this.toastr.success('Rent-a-car services are successfully loaded!');
        }
        else {
          this.toastr.warning('There are no rent-a-car services at the moment!');
        }
      }
      else {
        this.toastr.error('Problem with loading of rent-a-car services!');
      }
  },
  error => console.log('Error: ' + JSON.stringify(error))
);

  }

  showBranchOffices() {
    this.router.navigate(["/branch-offices"]);
  }

}
