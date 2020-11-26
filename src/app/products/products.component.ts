import { ProductService } from './../service/product.service';
import { MockData } from './../Model/mock-product-data';
import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[] = [];
  constructor(public productService:ProductService) {
    //this.products = MockData.Products;
    this.products=productService.getProducts();
   }

  ngOnInit(): void {
  }

  deleteProduct(product:Product){
    /* let index = this.products.indexOf(product);
    if(index ! = -1){
      this.products.splice(index,1)
    } */

    this.productService.removeProduct(product);
    this.products=this.productService.getProducts();
  }

}