import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { LoginService } from '../../services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private user: string;

  constructor(private router: Router, private loginService : LoginService, private location: Location) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')!= null){
      this.user = localStorage.getItem('currentUser').substring(81,100);}  //POPRAVITI OVO POSTO JE ZA SADA HARDCODOVANO!!!
  }

  login(){
    this.router.navigate(["/login"]);
  }
  register(){
    this.router.navigate(["/registration"]);
  }

  logout(){
    this.loginService.logout();
    location.reload()
  }

}
