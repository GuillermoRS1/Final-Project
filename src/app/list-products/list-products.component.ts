import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  products$: Observable<Product[]> | undefined
  product!: Product;
  public productList : any ;
  public filterCategory : any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.getProducts().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category=='')
      {
        return a;
      }
    })
  }
  
  getProducts() {
    return this.http.get<Product[]>('https://finalproject-guillermo-default-rtdb.firebaseio.com/products.json');
  }
}
