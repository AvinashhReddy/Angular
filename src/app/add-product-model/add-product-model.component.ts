import { ProductService } from './../service/product.service';
import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-model',
  templateUrl: './add-product-model.component.html',
  styleUrls: ['./add-product-model.component.css']
})
export class AddProductModelComponent implements OnInit {

  formSubmitted=false;
  title: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  modelName: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  color: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  productType: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  brand: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  price: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  myForm: FormGroup =new FormGroup(
    {
     
      'title':this.title,
      'modelName':this.modelName,
      'color':this.color,
      'productType':this.productType,
      'brand':this.brand,
      'price':this.price,
      

    }
  )

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(product:Product){
this.productService.addProduct(product);
this.formSubmitted=true;
this.router.navigateByUrl('/products');
  }

}
