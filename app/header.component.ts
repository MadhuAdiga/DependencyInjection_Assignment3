import { Component, OnInit } from '@angular/core';  //Import Component and ngOnInit dependenicies
import { HomeService } from './home.service' // Import HomeService 


@Component({
  selector: 'my-header',
  template: `<div class="navbar navbar-inverse">
             <h3 style="text-align:center">This is the header component</h3><br>
             <h4 style="text-align:center">{{homeData[0]}}</h4>
             </div>`
})// Create a component with html content for header and include the content which is being fetched from the HomeService 


export class HeaderComponent implements OnInit  { // Export a HeaderComponent
    homeData:any; // Declare a variable 
    constructor(private _homeService: HomeService){} // Declares a private variable and assign it to the type HomeService

    ngOnInit(){
        this.homeData= this._homeService.getData() // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    }
}

    

