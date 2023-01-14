import { Component, OnInit } from '@angular/core';
import { ICart, IProduct } from './interfaces';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cart-shop';
  products: IProduct[] = [];
  cart: ICart[] = [];
  show: boolean = false;

  constructor() {
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    this.show = false;
  }

  ngOnInit(){
    this.products = [
      {id:1, name: 'Fabada', description: 'Comida fabada', price: 17, img: ''},
      {id:2, name: 'Croquetas', description: 'Comida Croquetas', price: 13, img: ''},
      {id:3, name: 'Tortilla', description: 'Comida Tortilla', price: 9, img: ''},
      {id:4, name: 'Cocido', description: 'Comida Cocido', price: 14, img: ''},
      {id:5, name: 'Cachopo', description: 'Comida Cachopo', price: 11, img: ''},
    ];
  }

  toogleCart() {
    this.show = !this.show;
  }
}