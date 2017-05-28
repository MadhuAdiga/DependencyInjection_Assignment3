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
var ContainComponent = (function () {
    function ContainComponent(_homeService) {
        this._homeService = _homeService;
    } // Declares a private variable and assign it to the type HomeService
    ContainComponent.prototype.ngOnInit = function () {
        this.homeData = this._homeService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    };
    ContainComponent = __decorate([
        // Import HomeService 
        core_1.Component({
            selector: 'my-contain',
            template: "<div style=\"min-height:250px; min-width:300px; background-color: teal\">\n            <h3 style=\"text-align:center; margin:0 auto\">This is the contain component</h3>\n            <p style=\"text-align:justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p><br>\n            <h4 style=\"text-align:center\">{{homeData[1]}}</h4>\n            </div><br>\n            "
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], ContainComponent);
    return ContainComponent;
}());
exports.ContainComponent = ContainComponent;
//# sourceMappingURL=contain.component.js.map