import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ // all of our components that will be used in the app are declared
    AppComponent, CustomerComponent
  ],
  imports: [
    BrowserModule, // We'll need more @angular modules later, also 3rd party modules
    NgbModule.forRoot()
  ],
  providers: [], // Client-side Services (@Injectable classes)
  bootstrap: [AppComponent]
})
export class AppModule { }
