import { NgModule } from '@angular/core';

import { PricingComponent } from '@app/modules/pricing/pages/pricing.component';
import { PricingRoutingModule } from '@app/modules/pricing/pricing.routing';

import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';

import { SharedModule } from '@app/shared';

@NgModule({
    declarations: [
        PricingComponent,
        CreateComponent,
        ReadComponent
    ],
    imports: [
        SharedModule,

        PricingRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PricingModule {}
