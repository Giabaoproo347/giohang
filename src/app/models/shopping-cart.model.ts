import {CartItem} from './cart-item.model';

export class ShoppingCart {
  public items: CartItem[] = new Array<CartItem>();
  public deliveryOptionId: number;
  public grossTotal = 0;
  public deliveryTotal = 0;
  public itemsTotal = 0;

  public updateForm(src: ShoppingCart) {
    this.items = src.items;
    this.deliveryOptionId = src.deliveryOptionId;
    this.grossTotal = src.grossTotal;
    this.deliveryTotal = src.deliveryTotal;
    this.itemsTotal = src.itemsTotal;
  }
}
