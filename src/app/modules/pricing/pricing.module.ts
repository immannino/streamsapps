import { NgModule } from '@angular/core';

import { PricingComponent } from '@app/modules/pricing/pages/pricing.component';
import { PricingRoutingModule } from '@app/modules/pricing/pricing.routing';

import { SharedModule } from '@app/shared';

@NgModule({
    declarations: [
        PricingComponent
    ],
    imports: [
        SharedModule,

        PricingRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PricingModule {}
