import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// We create the object with the different characteristics that a product has.
interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  // Initialize the variables that will be needed
  products$: Observable<Product[]> | undefined
  product!: Product;
  public productList : any ;
  public filterCategory : any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      /* When entering the page call directly to the function getProducts() 
         to obtain the information of each of the products in the database. */
      this.getProducts().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }

  /* We created the filter() function so that once you click on a community, 
    the products of that community will appear. */
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category=='')
      {
        return a;
      }
    })
  }
  
  /* We create the function getProducts() to call the database and get the products. 
     Calling by url and storing in an array */
  getProducts() {
    return this.http.get<Product[]>('https://finalproject-guillermo-default-rtdb.firebaseio.com/products.json');
  }
}
