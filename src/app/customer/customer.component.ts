import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Customer} from "./Customer";

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit {

  private static _customers: any = {
    "1234": new Customer(1234, "Harry", "James", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206 491-1331", new Date(1980, 6, 31)),
    "1235": new Customer(1235, "Ron", "Bilius", "Weasley", "ronald.weasley@hogwarts.ac.uk", "+44 0206 491-1331", new Date(1980, 2, 1)),
    "1236": new Customer(1236, "Hermione", "Jean", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206 491-1331", new Date(1979, 8, 19)),
    "1237": new Customer(1237, "Neville", "", "Longbottom", "hermione.granger@hogwarts.ac.uk", "+44 0206 491-1331", new Date(1979, 8, 19)),
    "1238": new Customer(1238, "Dean", "", "Thomas", "hermione.granger@hogwarts.ac.uk", "+44 0206 491-1331", new Date(1979, 8, 19)),
    "1239": new Customer(1239, "Seamus", "", "Finnegan", "hermione.granger@hogwarts.ac.uk", "+44 0206 491-1331", new Date(1979, 8, 19))
  };
  private _customer: Customer;
  @Input('customerId')
  private customerId: number;

  constructor() {

  }

  ngOnInit() {
    this.customer = CustomerComponent.customers[this.customerId];
  }

  ngAfterViewInit() {
    // alert("Don't use alert() boxes!!!");
    // console.log("Alerts are bad, um-kay? This is customer: ");
    // console.log(this.customer);
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  static get customers(): any {
    return this._customers;
  }

  static set customers(value: any) {
    this._customers = value;
  }

  onClick($event) {
    console.log("Clicked on age of " + this.customer.firstName);
  }

  onHover($event) {
    console.log("Hovering over: ");
    console.log(this.customer);
    console.log($event);
  }

  ageInYears() : number {
    return Math.floor(this.customer.age);
  }


  // get customerId(): number {
  //   return this._customerId;
  // }
  //
  // @Input('customerId')
  // set customerId(value: number) {
  //   this._customerId = value;
  // }
}
