import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home-2/home-2.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/auth/login/login.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path:"twice",
    component:Home2Component
  },
  {
    path:"blog",
    component: BlogComponent
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"checkout",
    component: CheckoutComponent
  },
  {
    path:"single-product",
    component:SingleProductComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"single-blog",
    component:SingleBlogComponent
  },
  {
    path:"wishlist",
    component: WishlistComponent
  },
  {
    path: "**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
