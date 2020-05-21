import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserNavigationComponent } from './components/navigation/user-navigation/user-navigation.component';
import { OrganizerNavigationComponent } from './components/navigation/organizer-navigation/organizer-navigation.component';
import { CommonNavigationComponent } from './components/navigation/common-navigation/common-navigation.component';
import { SignInComponent } from './components/common/sign-in/sign-in.component';
import { SignUpComponent } from './components/common/sign-up/sign-up.component';
import { EventCardComponent } from './components/common/event-card/event-card.component';
import { EventCollectionComponent } from './components/common/event-collection/event-collection.component';
import { EventDetailsComponent } from './components/common/event-details/event-details.component';
import { EventRegisterComponent } from './components/user/event-register/event-register.component';
import { EventAddEditComponent } from './components/organizer/event-add-edit/event-add-edit.component';
import { UserDetailsFormComponent } from './components/user/user-details-form/user-details-form.component';
import { OrganizerDetailsFormComponent } from './components/organizer/organizer-details-form/organizer-details-form.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { OrganizerDashboardComponent } from './components/organizer/organizer-dashboard/organizer-dashboard.component';
import { RegisterEventConfirmationComponent } from './components/user/register-event-confirmation/register-event-confirmation.component';
import { AddEventConfirmationComponent } from './components/organizer/add-event-confirmation/add-event-confirmation.component';
import { LandingComponent } from './components/common/landing/landing.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    UserNavigationComponent,
    OrganizerNavigationComponent,
    CommonNavigationComponent,
    SignInComponent,
    SignUpComponent,
    EventCardComponent,
    EventCollectionComponent,
    EventDetailsComponent,
    EventRegisterComponent,
    EventAddEditComponent,
    UserDetailsFormComponent,
    OrganizerDetailsFormComponent,
    UserDashboardComponent,
    OrganizerDashboardComponent,
    RegisterEventConfirmationComponent,
    AddEventConfirmationComponent,
    LandingComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
