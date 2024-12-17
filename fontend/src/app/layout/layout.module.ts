import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutContainComponent } from './layout-contain/layout-contain.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";



@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        LayoutContainComponent
    ],
    exports: [
        LayoutContainComponent
    ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class LayoutModule { }
