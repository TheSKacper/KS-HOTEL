import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { OffersComponent } from './header/offers/offers.component';
import { LoginComponent } from './header/login/login.component';
import { RestaurantComponent } from './header/restaurant/restaurant.component';
import { ContactComponent } from './header/contact/contact.component';
import { AboutComponent } from './header/about/about.component'
import { PageComponent } from './header/offers/page/page.component';
import { BookingComponent } from './header/offers/booking/booking.component';
import { RegisterComponent } from './header/login/register/register.component';
import { CheckPageComponent } from './header/offers/booking/check-page/check-page.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'offers',component:OffersComponent},
  {path: 'login',component:LoginComponent},
  {path: 'restaurant',component:RestaurantComponent},
  {path: 'offers',component:OffersComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'about',component:AboutComponent},
  {path: 'search/:searchTerm',component:OffersComponent},
  {path: 'tag/:tag',component: OffersComponent},
  {path: 'offer/:id',component:PageComponent},
  {path: 'page',component:BookingComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'checkout',component:CheckPageComponent},
  {path: 'tagr/:tag',component:RestaurantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
