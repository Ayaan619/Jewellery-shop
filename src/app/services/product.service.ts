import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] =[
    new Product(1,'Product 1','Yay the gold thingy', 10000),
    new Product(2,'Product 2','Yay the silver thingy', 20000),
    new Product(3,'Product 3','Yay the 3rd silver thingy', 30000),
    new Product(4,'Product 4','Yay another gold thingy', 40000),
    new Product(5,'Product 5','Yay the gold thingy', 50000),
    new Product(6,'Product 6','Yay the gold thingy', 60000),
    new Product(7,'Product 6','Yay the gold thingy', 70000),
  ]

  constructor() { }

  getProducts(): Product[]{
    //make an Api to fill in the products/storage

    return this.products
  }
}
