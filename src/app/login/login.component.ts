import { Component } from '@angular/core';

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

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    if(this.username=== "TpainMcain" && this.password=== "asd123"){
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
