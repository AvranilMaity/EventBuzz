import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxBarcode6Module } from 'ngx-barcode6';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/common/sign-in/sign-in.component';
import { SignUpComponent } from './components/common/sign-up/sign-up.component';
import { EventCardComponent } from './components/common/event-card/event-card.component';
import { EventCollectionComponent } from './components/common/event-collection/event-collection.component';
import { EventRegisterComponent } from './components/user/event-register/event-register.component';
import { EventAddEditComponent } from './components/organizer/event-add-edit/event-add-edit.component';
import { RegisterEventConfirmationComponent } from './components/user/register-event-confirmation/register-event-confirmation.component';
import { AddEventConfirmationComponent } from './components/organizer/add-event-confirmation/add-event-confirmation.component';
import { LandingComponent } from './components/landing/landing.component';
import { CommonNavigationComponent } from './components/navigation/common-navigation/common-navigation.component';
import { UserNavigationComponent } from './components/navigation/user-navigation/user-navigation.component';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './components/user/event-details/event-details.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { BrowseEventsComponent } from './components/common/browse-events/browse-events.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ConfirmationComponent } from './components/common/confirmation/confirmation.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AdminDashboardComponent } from './components/common/admin/admin-dashboard/admin-dashboard.component';
import { AdminNavigationComponent } from './components/navigation/admin-navigation/admin-navigation.component';
import { PaymentComponent } from './components/common/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    EventCardComponent,
    EventCollectionComponent,
    EventDetailsComponent,
    EventRegisterComponent,
    EventAddEditComponent,
    RegisterEventConfirmationComponent,
    AddEventConfirmationComponent,
    LandingComponent,
    CommonNavigationComponent,
    UserNavigationComponent,
    DashboardComponent,
    BrowseEventsComponent,
    UserProfileComponent,
    ConfirmationComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminNavigationComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    RouterModule.forRoot(appRoutes),
    NgxBarcode6Module,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
