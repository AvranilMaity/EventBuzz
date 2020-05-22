import {Routes} from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/common/sign-in/sign-in.component';
import { SignUpComponent } from './components/common/sign-up/sign-up.component';
import { EventDetailsOrgComponent } from './components/organizer/event-details-org/event-details-org.component';
import { EventRegisterComponent } from './components/user/event-register/event-register.component';
import { EventAddEditComponent } from './components/organizer/event-add-edit/event-add-edit.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { EventDetailsComponent } from './components/user/event-details/event-details.component';

export const appRoutes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'eventdetails', component: EventDetailsComponent},
    {path: 'eventdetailsorg', component: EventDetailsOrgComponent},
    {path: 'eventregister', component: EventRegisterComponent},
    {path: 'eventaddedit', component: EventAddEditComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: 'landing', pathMatch: 'full'},
];


