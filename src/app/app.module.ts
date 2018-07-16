import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HttpClient, HttpHeaders,HttpClientModule  } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MAT_DIALOG_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule} from '@angular/material';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppRoutingModule } from './/app-routing.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SliderModule } from 'angular-image-slider';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VenueComponent } from './venue/venue.component';
import { CateringComponent } from './catering/catering.component';
import { CulturesComponent } from './cultures/cultures.component';
//import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'hammerjs';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { EventsComponent } from './events/events.component';
import { ItemSelectComponent } from './item-select/item-select.component';
import { AppSettings } from './URLMapping';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavBarComponent,
    OurServicesComponent,
    DialogOverviewExampleDialogComponent,
    TestimonialsComponent,
    HomeComponent,
    DashboardComponent,
    VenueComponent,
    CateringComponent,
    CulturesComponent,
    FilterFormComponent,
    EventsComponent,
    ItemSelectComponent,
    SnackbarComponent,
    UserregistrationComponent,
    CartComponent,
    OrdersComponent,
    //HomeComponent

  ],
  imports: [
    FormsModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SliderModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  entryComponents: [NavBarComponent,DialogOverviewExampleDialogComponent],
  bootstrap: [AppComponent,NavBarComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
})
export class AppModule { }
