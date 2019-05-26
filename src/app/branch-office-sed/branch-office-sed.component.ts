import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-branch-office-sed',
  templateUrl: './branch-office-sed.component.html',
  styleUrls: ['./branch-office-sed.component.css']
})
export class BranchOfficeSedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  addOffice(){
    this.router.navigate(["/add-branch-office"]);
  }

  searchOffice(searchParam){
    alert("TO-DO")
  }

  getOffices(){
    alert("TO-DO");
  }


}
