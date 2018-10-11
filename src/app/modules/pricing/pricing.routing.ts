import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricingComponent } from './pages/pricing.component';

export const routes: Routes = [
    { path: 'pricing', component: PricingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PricingRoutingModule { }
