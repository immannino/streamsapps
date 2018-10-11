import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { HomeModule } from './modules/home/home.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { OrderModule } from './modules/order/order.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // 3rd party

    // core & shared
    CoreModule,
    SharedModule,

    // features
    HomeModule,
    PricingModule,
    OrderModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
