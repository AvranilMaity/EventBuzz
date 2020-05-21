import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/common/sign-in/sign-in.component';
import { SignUpComponent } from './components/common/sign-up/sign-up.component';
import { EventCardComponent } from './components/common/event-card/event-card.component';
import { EventCollectionComponent } from './components/common/event-collection/event-collection.component';
import { EventDetailsComponent } from './components/common/event-details/event-details.component';
import { EventRegisterComponent } from './components/user/event-register/event-register.component';
import { EventAddEditComponent } from './components/organizer/event-add-edit/event-add-edit.component';
import { RegisterEventConfirmationComponent } from './components/user/register-event-confirmation/register-event-confirmation.component';
import { AddEventConfirmationComponent } from './components/organizer/add-event-confirmation/add-event-confirmation.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
