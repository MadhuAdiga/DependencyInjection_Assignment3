import { Injectable } from '@angular/core'; // Import Injectables dependencies

@Injectable() //Use Decorator @Injectable for services
export class HomeService { //Export class HomeService
    getData(){ // Declare a function getData which returms an array with three elements, one for each child component
        return ["For Header component, data fetched from HomeService",
                "For Contain component, data fetched from HomeService",
                "For Footer component, data fetched from HomeService",
                "Data fetched for HomeComponent from HomeService which provides for the entire application"
        ];
    }
}