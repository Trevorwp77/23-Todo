import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "Tpainmcain"
  password= "asd123"
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  Ng0nInit() {
  }

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    // if(this.username=== "Tpainmcain" && this.password=== "asd123")
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
