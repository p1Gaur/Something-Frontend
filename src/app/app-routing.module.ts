import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TestimonialsComponent} from './testimonials/testimonials.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { VenueComponent } from './venue/venue.component';
import { CateringComponent } from './catering/catering.component';
import { CulturesComponent } from './cultures/cultures.component';
import {FilterFormComponent} from './filter-form/filter-form.component';
import {EventsComponent} from './events/events.component';
import { ItemSelectComponent } from './item-select/item-select.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdmincultureComponent } from './adminculture/adminculture.component';
import { AdmineventsComponent } from './adminevents/adminevents.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'about', component: DashboardComponent },
  { path: 'ourservice', component: OurServicesComponent },
  { path: 'testimonial', component: TestimonialsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AboutUsComponent },
  { path: 'ourservice/venue', component: VenueComponent },
  { path: 'ourservice/catering', component: CateringComponent },
  { path: 'ourservice/culture', component: CulturesComponent },
  { path: 'ourservice/filters', component: FilterFormComponent },
  { path: 'ourservice/events', component: EventsComponent },
  { path: 'ourservice/events/items', component: ItemSelectComponent },
  { path: 'signup', component: UserregistrationComponent },
  { path: 'cart' , component: CartComponent },
  { path: 'addculture', component: AdmincultureComponent },
  { path: 'addevent', component: AdmineventsComponent },
  { path: 'order' , component:OrdersComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
