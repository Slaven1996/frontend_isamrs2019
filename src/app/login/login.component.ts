import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../model/loginDTO';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginDTO : LoginDTO;
  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.loginDTO = new LoginDTO();
  }

  onClick(){

    this.loginService.login(this.loginDTO);
    this.loginService.currentUser.subscribe(
      (result)=> 
    {
      if(result)
      { 
        alert("Uspesno ste se ulogovali!")
      }
    });
  }

}
