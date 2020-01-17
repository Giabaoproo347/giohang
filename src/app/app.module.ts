import {StoreFrontComponent} from './components/store-front/store-front.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ShoppingCartService} from './services/shopping-cart.service';
import {BrowserModule} from '@angular/platform-browser';
import {StorageService} from './services/storage.service';
import {AppRoutingModule} from './app-routing.module';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {ProductsDataService} from './services/products.service';
import {DeliveryOptionsDataService} from './services/delivery-option.service';
import {AppComponent} from './app.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {OrderConfirmationComponent} from './components/order-comfirmation/order-comfirmation.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsDataService,
    DeliveryOptionsDataService,
    StorageService,
    { provide: StorageService, useClass: StorageService },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
