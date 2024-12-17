import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {HomeComponent} from "./features/home/home.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {LayoutContainComponent} from "./layout/layout-contain/layout-contain.component";

const routes: Routes = [
  // {path: '', component: LoginComponent},
  // { path: 'login', component: LoginComponent },
  // {path:'home',component: HomeComponent},
  // { path: 'feature', loadChildren:()=>import('./features/features.module').then(m => m.FeaturesModule) },
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutContainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'feature', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
