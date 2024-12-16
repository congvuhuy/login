import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../core/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productList :any []=[];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getSecureData().subscribe(
      res=>{
        this.productList=res.result;
        console.log( this.productList);
      }
    )
  }

}
