

import {Route, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LandingComponent} from "./landing/landing.component";
import {ShippingManagementComponent} from "./shipping-management/shipping-management.component";
import {OrderManagementComponent} from "./order-management/order-management.component";
import {CustomerManagementComponent} from "./customer-management/customer-management.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: LandingComponent},
  {path: 'CustomerManagement', component: CustomerManagementComponent},
  {path: 'Customer/:id', component: CustomerComponent},
  {path: 'OrderManagement', component: OrderManagementComponent},
  {path: 'ShippingManagement', component: ShippingManagementComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true})
