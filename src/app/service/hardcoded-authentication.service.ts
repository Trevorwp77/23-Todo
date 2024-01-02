import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    // console.log('before ' + this.isUserLoggedIn());
    if(username=== "Tpainmcain" && password=== "asd123") {
      sessionStorage.setItem('authenticatedUser', username)
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
  
}
