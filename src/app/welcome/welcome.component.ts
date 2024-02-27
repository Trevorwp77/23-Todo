import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'some welcome message'
  welcomeMessageFromService: string = ''
  name = ""

  constructor(
    private route: ActivatedRoute,
    private service:WelcomeDataService) { 

    }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  // Add the getWelcomeMessage method to handle the button click event
  getWelcomeMessage(): void {
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log(`Welcome, ${this.name}! This is your custom welcome message.`);
  }

  getWelcomeMessageWithParameter(): void {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log(`Welcome, ${this.name}! This is your custom welcome message.`);
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: any){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }



}
