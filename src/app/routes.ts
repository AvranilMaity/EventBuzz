import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/common/sign-in/sign-in.component';
import { SignUpComponent } from './components/common/sign-up/sign-up.component';
import { EventRegisterComponent } from './components/user/event-register/event-register.component';
import { EventAddEditComponent } from './components/organizer/event-add-edit/event-add-edit.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { EventDetailsComponent } from './components/user/event-details/event-details.component';
import { RegisterEventConfirmationComponent } from './components/user/register-event-confirmation/register-event-confirmation.component';
import { BrowseEventsComponent } from './components/common/browse-events/browse-events.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ConfirmationComponent } from './components/common/confirmation/confirmation.component';
import { AdminDashboardComponent } from './components/common/admin/admin-dashboard/admin-dashboard.component';
import { PaymentComponent } from './components/common/payment/payment.component';

export const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'eventdetails/:eventId', component: EventDetailsComponent },
  { path: 'eventregister/:eventId', component: EventRegisterComponent },
  { path: 'eventaddedit', component: EventAddEditComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'registereventconfirmation',
    component: RegisterEventConfirmationComponent,
  },
  { path: 'payment', component: PaymentComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'confirmation/:eventId/:eventRegId', component: ConfirmationComponent },
  { path: 'browseevents', component: BrowseEventsComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: 'landing', pathMatch: 'full' },
];
