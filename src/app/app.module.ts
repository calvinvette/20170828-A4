import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {CustomerTableComponent} from './customer-table/customer-table.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';
import {OrderManagementComponent} from './order-management/order-management.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {OrderTableComponent} from './order-table/order-table.component';
import {ShippingManagementComponent} from './shipping-management/shipping-management.component';
import {ShippingTableComponent} from './shipping-table/shipping-table.component';
import {ShippingViewComponent} from './shipping-view/shipping-view.component';
import {LandingComponent} from './landing/landing.component';
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app.routing";

@NgModule({
  declarations: [ // all of our components that will be used in the app are declared
    AppComponent,
    CustomerComponent,
    CustomerTableComponent,
    CustomerManagementComponent,
    OrderManagementComponent,
    OrderViewComponent,
    OrderTableComponent,
    ShippingManagementComponent,
    ShippingTableComponent,
    ShippingViewComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule, // We'll need more @angular modules later, also 3rd party modules
    FormsModule,
    RouterModule,
    AppRouting,
    NgbModule.forRoot()
  ],
  providers: [], // Client-side Services (@Injectable classes)
  bootstrap: [AppComponent]
})
export class AppModule {
}
