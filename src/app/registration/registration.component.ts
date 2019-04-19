import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { userBackend } from '../model/user-backend';
import { UserService} from '../services/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: userBackend;

  constructor(
    private userService : UserService,
    private toastr : ToastrService,
    private router : Router,
    private route : ActivatedRoute
    )  {
      this.user = {firstName: '', lastName:''};
    }
  

  ngOnInit() {
  }

  addUser(){
    debugger;
    alert(this.router.url);
    if(this.user.firstName !== '') {
      alert("aaaaaaaa prazan string")
      if(this.router.url != "/registration"){
        alert("Bad")
      }
      else{
        alert("adduser")
        this.userService.addUser(this.user);
      }
    }
    else {
      this.toastr.error('Morate uneti ime!');
    }
  }

}
