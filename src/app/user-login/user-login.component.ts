import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginUserService } from '../service/login-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User;

  constructor(private loginService: LoginUserService, private router: Router) { }

  ngOnInit(): void {
  }

  userLogin()
  {
    console.log(this.user)
    this.loginService.LoginUser(this.user).subscribe(data=>{
      this.router.navigate(['/home']).then();
      alert("Successfully login")
    }, error => alert("Sorry please try again"))
  }

}
