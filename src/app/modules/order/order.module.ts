import { NgModule } from '@angular/core';

import { OrderComponent } from '@app/modules/order/pages/order.component';
import { OrderRoutingModule } from '@app/modules/order/order.routing';

import { WashComponent } from '@app/modules/order/pages/wash/wash.component';
import { ContactComponent } from '@app/modules/order/pages/contact/contact.component';

import { SharedModule } from '@app/shared';

@NgModule({
    declarations: [
        OrderComponent,
        WashComponent,
        ContactComponent
    ],
    imports: [
    SharedModule,

        OrderRoutingModule
    ],
    exports: [],
    providers: [],
})
export class OrderModule {}
