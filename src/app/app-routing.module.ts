import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CheckoutComponent} from './components/checkout/checkout.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {StoreFrontComponent} from './components/store-front/store-front.component';
import {OrderConfirmationComponent} from './components/order-comfirmation/order-comfirmation.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [{
  path: 'checkout',
  component: CheckoutComponent
}, {
  path: 'confirmed',
  component: OrderConfirmationComponent
}, {
  path: '**',
  component: StoreFrontComponent
},
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
