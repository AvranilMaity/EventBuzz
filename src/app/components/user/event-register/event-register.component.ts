import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';
import { FormGroup, FormControl } from '@angular/forms';
import { IRegistration } from 'src/app/interfaces/registration';
import { IEvent } from 'src/app/interfaces/event';
import { TicketType } from 'src/app/utilities/constants';

interface Attendee {
  name: string;
  emailId: string;
  ticketType: string;
}
interface Promocode {
  name: string;
  percentOff?: number;
  valueOff?: number;
}

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css'],
})
export class EventRegisterComponent implements OnInit {
  eventData: IEvent;
  eventId: string;
  addFriendForm: FormGroup;
  promoCodeForm: FormGroup;
  invitedRegistrations: IRegistration[] = [];
  invitedUsers: Attendee[] = [];
  availablePromoCodes: Promocode[] = [
    {
      name: 'GO',
      percentOff: 60,
      valueOff: null,
    },
    {
      name: 'BUZZFIRST30',
      percentOff: 30,
      valueOff: null,
    },
    {
      name: 'PANZER100',
      percentOff: 100,
      valueOff: null,
    },
    {
      name: 'DIWALIFL200OFF',
      percentOff: null,
      valueOff: 200,
    },
  ];
  regularfixedPrice: number;
  vipfixedPrice: number;
  regularVariablePrice: number;
  vipVariablePrice: number;
  trp: number;
  tvp: number;
  promoApplied: boolean = false;
  sgst: number;
  cgst: number;
  service: number;
  totalDiscount: number;
  totalAmount: number;
  finalAmount: number;
  promocode: number;
  promoCode: Promocode;
  promoMsg: string;

  constructor(
    private route: Router,
    private commonService: CommonService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadEvent();
    this.initForm();
    this.regularfixedPrice = 700;
    this.vipfixedPrice = 1200;
    this.regularVariablePrice = this.regularfixedPrice;
    this.vipVariablePrice = this.vipfixedPrice;
    this.sgst = 10;
    this.cgst = 10;
    this.service = 5;
    this.promocode = 0;
    this.trp = 0;
    this.tvp = 0;
    this.totalDiscount = 0;
    this.calculatePrice();
  }

  loadEvent(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.eventId = (params.get('eventId'));
    });
    //this.eventData = this.commonService.fetchEventbyId(this.eventData.eventId);
  }

  initForm() {
    let name;
    let emailId;
    let ticketType;

    this.addFriendForm = new FormGroup({
      name: new FormControl(name),
      emailId: new FormControl(emailId),
      ticketType: new FormControl(ticketType),
    });
    this.promoCodeForm = new FormGroup({
      promocode: new FormControl(null),
    });
  }

  onApplyPromo() {
    let flag = 0;

    for (let promo of this.availablePromoCodes) {
      if (promo.name == this.promoCodeForm.value.promocode) {
        this.promoCode = promo;
        flag = 1;
      }
    }
    if (flag == 1) {
      if (this.promoCode.percentOff) {
        this.regularVariablePrice =
          this.regularVariablePrice * (1 - this.promoCode.percentOff / 100);
        this.vipVariablePrice =
          this.vipVariablePrice * (1 - this.promoCode.percentOff / 100);
      }
      if (this.promoCode.valueOff) {
        this.regularVariablePrice =
          this.regularVariablePrice - this.promoCode.valueOff;
        this.vipVariablePrice = this.vipVariablePrice - this.promoCode.valueOff;
      }
      this.calculatePrice();
      this.promoApplied = true;
      this.promoMsg = 'Yay! Promo applied!';
    } else {
      this.promoMsg = 'Promo not available. Try another one.';
      this.promoApplied = false;
    }
  }
  onCancelPromo() {
    this.regularVariablePrice = this.regularfixedPrice;
    this.vipVariablePrice = this.vipfixedPrice;
    this.calculatePrice();
    this.promoApplied = false;
  }
  calculatePrice() {
    this.totalAmount = 0;
    this.finalAmount = 0;
    this.trp = 0;
    this.tvp = 0;
    this.totalDiscount = 0;
    for (let user of this.invitedUsers) {
      if (user.ticketType == 'Regular') {
        this.totalAmount += this.regularfixedPrice;
        this.trp += this.regularfixedPrice;
        this.totalDiscount +=
          this.regularfixedPrice - this.regularVariablePrice;
      } else {
        this.totalAmount += this.vipfixedPrice;
        this.tvp += this.vipfixedPrice;
        this.totalDiscount += this.vipfixedPrice - this.vipVariablePrice;
      }
    }
    this.finalAmount = this.totalAmount - this.totalDiscount;
    this.finalAmount *=
      1 + (this.sgst / 100 + this.cgst / 100 + this.service / 100);
  }

  onAddUser() {
    this.invitedUsers.push(this.addFriendForm.value);
    console.log(this.addFriendForm.value);
    
    let registration: IRegistration = {
      eventRegId: null,
      event :{
        eventId: +this.eventId
      },
      user: JSON.parse(localStorage.getItem('user')).user,
      name: this.addFriendForm.controls.name.value,
      email: this.addFriendForm.controls.emailId.value,
      ticketType: this.addFriendForm.controls.ticketType.value,
      status: 'Approved',
      transactionId: null,
    }
    this.invitedRegistrations.push(registration);
    this.calculatePrice();
  }
  onAddAsVIP() {
    (<FormControl>this.addFriendForm.get('ticketType')).setValue('VIP');
  }
  onAddAsRegular() {
    (<FormControl>this.addFriendForm.get('ticketType')).setValue('Regular');
  }

  onDeleteUser(id: number) {
    console.log(id);
    this.invitedUsers.splice(id, 1);
    this.invitedRegistrations.splice(id,1)
    console.log(this.invitedUsers);
  }

  confirmRegistration() {
    console.log('navigate to event register');
    console.log(this.invitedRegistrations);
    console.log(this.invitedUsers);

    let registration: IRegistration = {
      eventRegId: null,
      event :{
        eventId: +this.eventId
      },
      user: JSON.parse(localStorage.getItem('user')).user,
      name: JSON.parse(localStorage.getItem('user')).userDetails.name,
      email:  JSON.parse(localStorage.getItem('user')).user.email,
      ticketType: TicketType.Regular,
      status: 'Approved',
      transactionId: null,
    }
    this.invitedRegistrations.push(registration);
    this.userService.eventRegister(this.invitedRegistrations).subscribe(
      (data) => {
        console.log(data);
        if (data != null) {
          console.log('registered successfully');
          console.log(data);
          this.route.navigate(['/confirmation',this.eventId, data[data.length -1].eventRegId]);
        } else {
          console.log('registration failed');
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('registration function called');
      }
    );
    this.route.navigate(['/confirmation',this.eventId]);
  }

  backToEventPage(){
    console.log('navigate to event page');
    this.route.navigate(['/eventdetails',this.eventId]);

  }
}
