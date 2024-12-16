import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    AppModule,
  ]
})
export class ProductsModule { }
