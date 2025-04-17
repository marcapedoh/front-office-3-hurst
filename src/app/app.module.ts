import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { ProductAreaComponent } from './components/product-area/product-area.component';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home-2/home-2.component';
import { SliderBannerComponent } from './components/slider-banner/slider-banner.component';
import { SidebarSearchComponent } from './components/sidebar-search/sidebar-search.component';
import { DiscountProductComponent } from './components/discount-product/discount-product.component';
import { PurchaseOnlineComponent } from './components/purchase-online/purchase-online.component';
import { BlogAreaComponent } from './components/blog-area/blog-area.component';
import { SubscribeAreaComponent } from './components/subscribe-area/subscribe-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderAreaComponent } from './components/slider-area/slider-area.component';
import { BannerAreaComponent } from './components/banner-area/banner-area.component';
import { ProductAreaDeuxComponent } from './components/product-area-deux/product-area-deux.component';
import { DiscountProductAreaDeuxComponent } from './components/discount-product-area-deux/discount-product-area-deux.component';
import { PurchaseOnlineAreaDeuxComponent } from './components/purchase-online-area-deux/purchase-online-area-deux.component';
import { QuickViewWrapperComponent } from './components/quick-view-wrapper/quick-view-wrapper.component';
import { BlogAreaDeuxComponent } from './components/blog-area-deux/blog-area-deux.component';
import { BrandLogoComponent } from './components/brand-logo/brand-logo.component';
import { PageUrlComponent } from './components/page-url/page-url.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './components/auth/store/effects/auth.effects';
import { OrderEffects } from './components/auth/store/effects/order.effects';
import { PaypalEffects } from './components/auth/store/effects/paypal.effects';
import { ProductEffects } from './components/auth/store/effects/product.effects';
import { authReducer } from './components/auth/store/reducers/auth.reducers';
import { orderReducer } from './components/auth/store/reducers/order.reducers';
import { paypalReducer } from './components/auth/store/reducers/paypal.reducers';
import { productReducer, categoryReducer } from './components/auth/store/reducers/product.reducers';
import { registerReducer } from './components/auth/store/reducers/register.reducers';
import { WebNotificationComponent } from './components/web-notification/web-notification.component';
import { ShopSideBarComponent } from './components/shop-side-bar/shop-side-bar.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    AboutComponent,
    BlogComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    WishlistComponent,
    MobileHeaderComponent,
    MobileMenuComponent,
    CarrousselComponent,
    ProductAreaComponent,
    HomeComponent,
    Home2Component,
    SliderBannerComponent,
    SidebarSearchComponent,
    DiscountProductComponent,
    PurchaseOnlineComponent,
    BlogAreaComponent,
    SubscribeAreaComponent,
    FooterComponent,
    SliderAreaComponent,
    BannerAreaComponent,
    ProductAreaDeuxComponent,
    DiscountProductAreaDeuxComponent,
    PurchaseOnlineAreaDeuxComponent,
    QuickViewWrapperComponent,
    BlogAreaDeuxComponent,
    BrandLogoComponent,
    PageUrlComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    SingleProductComponent,
    SingleBlogComponent,
    WebNotificationComponent,
    ShopSideBarComponent,
    ShopComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ auth: authReducer, register: registerReducer, products: productReducer, categories: categoryReducer, orders: orderReducer, paypal: paypalReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthEffects, ProductEffects, OrderEffects, PaypalEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
