import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css']
})
export class AddBranchOfficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveOffice() {
    //Office name i location unosi korisnik, dok ID rent-a-car SERVISA kom pripada treba sam da zna ili da korisnik UNESE****Dodati atribut da zna kojoj firmi pripada?
    alert("Save office")
  }


}
