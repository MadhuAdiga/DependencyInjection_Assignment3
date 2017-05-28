import { Component, OnInit } from '@angular/core';  //Import Component and ngOnInit dependenicies
import { HomeService } from './home.service' // Import HomeService 

@Component({
  selector: 'my-contain',
  template: `<div style="min-height:250px; min-width:300px; background-color: teal">
            <h3 style="text-align:center; margin:0 auto">This is the contain component</h3>
            <p style="text-align:justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p><br>
            <h4 style="text-align:center">{{homeData[1]}}</h4>
            </div><br>
            `
})// Create a component with html content for body and include the content which is being fetched from the HomeService


export class ContainComponent implements OnInit  { // Export a HeaderComponent
    homeData:any; // Declare a variable 
    constructor(private _homeService: HomeService){} // Declares a private variable and assign it to the type HomeService

    ngOnInit(){
        this.homeData= this._homeService.getData() // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    }
}
    

