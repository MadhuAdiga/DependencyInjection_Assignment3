"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import Component and ngOnInit dependenicies
var home_service_1 = require('./home.service'); // Import HomeService 
var AppComponent = (function () {
    function AppComponent(_homeService) {
        this._homeService = _homeService;
    } // Declares a private variable and assign it to the type HomeService
    AppComponent.prototype.ngOnInit = function () {
        this.homeData = this._homeService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    };
    AppComponent = __decorate([
        // Import HomeService 
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container container-fluid\">             <h1><u>Global Services and Data Injection</u></h1>\n                <h4>{{homeData[3]}}</h4>\n                <my-header></my-header>\n                <my-contain></my-contain>\n                <my-footer>></my-footer>\n             </div>"
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map