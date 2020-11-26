import { MockData } from './../Model/mock-product-data';
import { Product } from './../Model/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  products:Product[]=[];
  constructor() {
    this.products=MockData.Products;
   }
   getProducts():Product[]{
     return this.products;
   }
   removeProduct(product:Product){
     let index=this.products.indexOf(product);
     if(index!=-1){
       this.products.splice(index,1);
     }

   }
   addProduct(product:Product){
     this.products.push(product);
   }
   getProduct(id:Number){
   return this.products.find(p=>p.id==id);

   }
  }

