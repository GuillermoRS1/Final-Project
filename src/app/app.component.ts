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
      {id:1, name: 'Fabada Asturiana', description: 'White beans, chorizo, morcilla, and bacon, all doused in a buttery chicken stock flavored with smoked paprika, garlic, and saffron.', price: 17, img: 'fabada'},
      {id:2, name: 'Croquetas', description: '(Croquettes) Usually prepared with a buttery béchamel base that is well chilled and formed into round or cylindrical patties.', price: 13, img: 'croquetas'},
      {id:3, name: 'Tortilla', description: '(Omelette) It’s an egg and potato dish that’s cooked in a skillet and served as a tapa, a main dish with a baguette and green salad.', price: 9, img: 'tortilla'},
      {id:4, name: 'Gazpacho', description: 'A cold soup consisting of crushed tomatoes, finely chopped cucumbers, onions, peppers, croutons, vinegar, and olive oil.', price: 14, img: 'gazpacho'},
      {id:5, name: 'Paella', description: 'Consists of rice that is cooked alongside chicken thighs, rabbit, three types of beans, tomatoes, and snails.', price: 11, img: 'paella'},
      {id:6, name: 'Escalibada', description: '(Roasted Peppers Salad) Include eggplants, bell peppers, and sometimes onions and tomatoes, typically grilled whole over hot embers.', price: 12, img: 'Escalibada'},
      {id:7, name: 'Migas', description: '(Crumbs) The ingredients vary from region to region. Generally, the dish consists of water-soaked bread, garlic, paprika, and olive oil.', price: 10, img: 'migas'},
      {id:8, name: 'Pulpo a la Gallega', description: '(Galician octopus) Is a traditional Galician dish made by cooking octopus, potatoes, and sweet paprika powder in copper cauldrons.', price: 7, img: 'pulpoGallega'},
    ];
  }

  toogleCart() {
    this.show = !this.show;
  }
}