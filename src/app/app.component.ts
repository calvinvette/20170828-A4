import {Component, OnInit} from '@angular/core';
import {Customer} from "./customer/Customer";
import {CustomerComponent} from "./customer/customer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = "Weasley's Wizarding Wheezes";
  // now: Date = new Date();
  // firstName = "Harry";
  // birthDate: Date = new Date(1980, 6, 31);
  navbarCollapsed: boolean = false;
//   public customers: Customer[] = [];
//
//   constructor() {
//
//   }
//
//   ngOnInit() {
//     for (let cust in CustomerComponent.customers) {
//       this.customers.push(CustomerComponent.customers[cust]);
// // Pick a random birthdate between 1 Jan 1980 and now.
//       let start = new Date(1980, 1, 1);
//       let end = new Date();
//       let timeRangeInMS = (end.getTime() - start.getTime());
//       let randomDate: Date = new Date(start.getTime() + Math.random() *
//         timeRangeInMS);
//       CustomerComponent.customers[cust].birthDate = randomDate;
//     }
//     console.log("Customers: ");
//     console.log(this.customers);
//   }
}
