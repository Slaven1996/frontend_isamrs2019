import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { userBackend } from '../model/user-backend';
import { UserService} from '../services/user.service';
import { User} from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User;

  constructor(
    private userService : UserService,
    private toastr : ToastrService,
    private router : Router,
    private route : ActivatedRoute
    )  
  {
    this.user = new User();
  }
  
  ngOnInit() {
  }

  addUser(){
    if(this.user.username !== '') {
      if(this.router.url != "/registration"){
        alert("Wrong input")
      }
      else{
        this.userService.addUser(this.user);
      }
    }
    else {
      this.toastr.error('Morate uneti ime!');
    }
  }

}
