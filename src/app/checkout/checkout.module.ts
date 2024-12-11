import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ItemsComponent } from './checkout-page/items/items.component';
import { AdressessComponent } from './checkout-page/adressess/adressess.component';
import { CheckoutRoutingModule } from './checkout.router.module';
import { OrderComponent } from './checkout-page/order/order.component';
import { AddressFormComponent } from './checkout-page/address-form/address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitSizeColorDirective } from '../split-size-color.directive';



@NgModule({
  declarations: [
    CheckoutPageComponent,
    ItemsComponent,
    AdressessComponent,
    OrderComponent,
    AddressFormComponent,
    
    SplitSizeColorDirective
    
  ],
  imports: [
    
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
