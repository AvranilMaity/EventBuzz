import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


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
import { EventDetailsOrgComponent } from './components/organizer/event-details-org/event-details-org.component';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './components/user/event-details/event-details.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';

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
    EventDetailsOrgComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],

  bootstrap: [AppComponent],
})
export class AppModule {}
