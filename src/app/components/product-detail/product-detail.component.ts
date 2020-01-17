import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Product} from '../../models/product.model';
import {ShoppingCart} from '../../models/shopping-cart.model';
import {ProductsDataService} from '../../services/products.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  itemCount: number;
  public products: Observable<Product[]>;
  public cart: Observable<ShoppingCart>;

  private cartSubscription: Subscription;


  constructor(private productsService: ProductsDataService,
              private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);

    });
  }


  public emptyCart(): void {
    this.shoppingCartService.empty();
  }
}
