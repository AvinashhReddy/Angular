import { Product } from './../Model/Product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:Product;
  @Output() removed = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.removed.emit(this.product);
  }
}