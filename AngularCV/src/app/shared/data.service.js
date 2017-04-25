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
var core_1 = require('@angular/core');
//Orly - use Injectable to indicate it's a service
var DataService = (function () {
    function DataService() {
    }
    //Orly - This method returns all the flower list data
    DataService.prototype.getFlower = function () {
        return [{
                "Institution": "Technion",
                "Degree": "BSc.",
                "StartDate": new Date("February 4, 2016"),
                "EndDate": new Date("February 29, 2016"),
                "Grade": 85,
            },
            {
                "Institution": "Columbia",
                "Degree": "BSc.",
                "StartDate": new Date("February 4, 2012"),
                "EndDate": new Date("February 4, 2016"),
                "Grade": 85,
            },
            {
                "Institution": "HofHacarmel",
                "Degree": "BSc.",
                "StartDate": new Date("February 4, 2016"),
                "EndDate": new Date("February 4, 2016"),
                "Grade": 85,
            },
        ];
    };
    //Orly - This method returns customer list data
    DataService.prototype.getCustomer = function () {
        return [
            {
                "Workplace": 'Frenzy-Hooli ',
                "Location": 'Tel Aviv',
                "StartDate": new Date("February 4, 2016  "),
                "EndDate": new Date("February 4, 2016  "),
                "Position": 'important',
            },
            {
                "Workplace": 'Frenzy ',
                "Location": 'Tel Aviv',
                "StartDate": new Date("February 4, 2016  "),
                "EndDate": new Date("February 4, 2016  "),
                "Position": 'Very important',
            },
            {
                "Workplace": 'Catering',
                "Location": 'Tel Aviv',
                "StartDate": new Date("February 4, 2016  "),
                "EndDate": new Date("February 4, 2016  "),
                "Position": 'Supreme important',
            },
        ];
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map