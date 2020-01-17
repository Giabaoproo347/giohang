import {Ingredient} from './ingredient.model';

export class Product {
  public id: number;
  public name: string;
  public description: string;
  public  price: number;
  public ingredients: Ingredient[];
}
