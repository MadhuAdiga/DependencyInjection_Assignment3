import { Component, OnInit } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { HomeService } from './home.service' // Import HomeService 


@Component({
  selector: 'my-app',
  template: `<div class="container container-fluid">\
             <h1><u>Global Services and Data Injection</u></h1>
                <h4>{{homeData[3]}}</h4>
                <my-header></my-header>
                <my-contain></my-contain>
                <my-footer>></my-footer>
             </div>`
})


export class AppComponent { // Export a class AppComponent 
    homeData:any; // Declare a variable 
    constructor(private _homeService: HomeService){} // Declares a private variable and assign it to the type HomeService

    ngOnInit(){
        this.homeData= this._homeService.getData() // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    }
} 

    
    

