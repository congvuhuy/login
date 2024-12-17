  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { HomeComponent } from './home/home.component';
  import {Router, RouterModule} from "@angular/router";
  import {FeaturesRoutingModule} from "./features-routing.module";
  import { ProfileComponent } from './profile/profile.component';
  import {ProductsModule} from "./products/products.module";
  import {FormsModule} from "@angular/forms";

  @NgModule({
    declarations: [
      HomeComponent,
      ProfileComponent,
    ],
      imports: [
          CommonModule,
          FeaturesRoutingModule,
          FormsModule,
      ]
  })
  export class FeaturesModule { }
