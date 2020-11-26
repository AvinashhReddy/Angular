import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import {Location} from '@angular/common';
import { Product } from '../Model/Product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  id:Number;
  constructor(private activatedRoute:ActivatedRoute,
    private location:Location,private productService:ProductService) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log('ID :' + this.id);
    this.product = this.productService.getProduct(this.id);

  }

}
