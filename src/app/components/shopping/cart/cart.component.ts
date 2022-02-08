import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems= [
    {id: 1, productid: 1,productName:'Test 1', qty: 4, price:122000 },
    {id: 2, productid: 3,productName:'Test 2', qty: 2, price:12200 },
    {id: 3, productid: 2,productName:'Test 3', qty: 3, price:12000 },
    {id: 4, productid: 4, productName:'Test 4',qty: 1, price:1000 },
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
