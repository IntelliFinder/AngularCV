import{Injectable} from '@angular/core';
import{IFlower} from '../flower-list/flower';
import{ICustomer} from '../customer-list/customer';

//Orly - use Injectable to indicate it's a service
@Injectable()
export class DataService{
  //Orly - This method returns all the flower list data
  getFlower():IFlower[]{
    return [{
      "Institution":"Technion",
      "Degree":"BSc.",
      "StartDate": new Date("February 4, 2016"),
      "EndDate": new Date("February 29, 2016"),
      "Grade":85,
    },
    {
      "Institution":"Columbia",
      "Degree":"BSc.",
      "StartDate": new Date("February 4, 2012"),
      "EndDate": new Date("February 4, 2016"),
      "Grade":85,
    },
    {
      "Institution":"HofHacarmel",
      "Degree":"BSc.",
      "StartDate": new Date("February 4, 2016"),
      "EndDate": new Date("February 4, 2016"),
      "Grade":85,
    },
  ];
}
  //Orly - This method returns customer list data
  getCustomer():ICustomer[]{
    return[
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
  }
}
