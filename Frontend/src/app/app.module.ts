import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RestaurantComponent } from './header/restaurant/restaurant.component';
import { OffersComponent } from './header/offers/offers.component';
import { ContactComponent } from './header/contact/contact.component';
import { LoginComponent } from './header/login/login.component';
import { HomeComponent } from './header/home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { SearchComponent } from './header/offers/search/search.component';
import { TagsComponent } from './header/offers/tags/tags.component';
import { PageComponent } from './header/offers/page/page.component';
import { BookingComponent } from './header/offers/booking/booking.component';
import { NotfoundComponent } from './header/offers/search/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './header/login/register/register.component';
import { DefaultButtonComponent } from './partials/default-button/default-button.component';
import { InputContainerComponent } from './partials/input-container/input-container.component';
import { InputValidationComponent } from './partials/input-validation/input-validation.component';
import { TextInputComponent } from './partials/text-input/text-input.component';
import { TitleComponent } from './partials/title/title.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { LoadingComponent } from './partials/loading/loading.component';
import { CheckPageComponent } from './header/offers/booking/check-page/check-page.component';
import { OrderListComponent } from './partials/order-list/order-list.component'
import { AuthInterceptor } from './auth/auth.interceptor';
import { TagsRComponent } from './header/restaurant/tags-r/tags-r.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantComponent,
     OffersComponent,
     ContactComponent,
     LoginComponent,
     HomeComponent,
     AboutComponent,
     SearchComponent,
     TagsComponent,
     PageComponent,
     BookingComponent,
     NotfoundComponent,
     RegisterComponent,
     DefaultButtonComponent,
     InputContainerComponent,
     InputValidationComponent,
     TextInputComponent,
     TitleComponent,
     NotFoundComponent,
     LoadingComponent,
     CheckPageComponent,
     OrderListComponent,
     TagsRComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RatingModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass: 'toast-bottom-right',
      newestOnTop:false
    })
    
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
