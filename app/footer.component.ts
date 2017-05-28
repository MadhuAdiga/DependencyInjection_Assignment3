import { Component, OnInit } from '@angular/core';  //Import Component and ngOnInit dependenicies
import { HomeService } from './home.service' // Import HomeService 


@Component({
  selector: 'my-footer',
   template: `<div class="navbar navbar-inverse">
             <h3 style="text-align:center">This is the footer component</h3><br>
             <h4 style="text-align:center">{{homeData[2]}}</h4>             
             </div><br>
             `
})// Create a component with html content for footer and include the content which is being fetched from the HomeService


export class FooterComponent implements OnInit  { // Export a FooterComponent
    homeData:any; // Declare a variable 
    constructor(private _homeService: HomeService){} // Declares a private variable and assign it to the type HomeService

    ngOnInit(){
        this.homeData= this._homeService.getData() // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    }
}
    

