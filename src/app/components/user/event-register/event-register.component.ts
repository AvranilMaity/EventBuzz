import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';
import { FormGroup, FormControl } from '@angular/forms';

interface Attendee {
  name: string;
  email: string;
  type: string;
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
  addFriendForm: FormGroup;
  promoCodeForm: FormGroup;
  invitedUsers: Attendee[] = [
    {
      name: 'Avranil Maity',
      email: 'avranilmaity97@gmail.com',
      type: 'VIP',
    },
    {
      name: 'Kingshuk Saha',
      email: 'sahakingshuk@gmail.com',
      type: 'VIP',
    },
    {
      name: 'Yash Patel',
      email: 'patelyash@gmail.com',
      type: 'Regular',
    },
    {
      name: 'Vishwesh Soman',
      email: 'somvish@gmail.com',
      type: 'Regular',
    },
  ];
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
    private userService: UserService
  ) {}

  ngOnInit() {
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

  initForm() {
    this.addFriendForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      type: new FormControl(null),
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
      if (user.type == 'Regular') {
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
    this.calculatePrice();
  }
  onAddAsVIP() {
    (<FormControl>this.addFriendForm.get('type')).setValue('VIP');
  }
  onAddAsRegular() {
    (<FormControl>this.addFriendForm.get('type')).setValue('Regular');
  }

  onDeleteUser(id: number) {
    console.log(id);
    this.invitedUsers.splice(id, 1);
    console.log(this.invitedUsers);
  }

  confirmRegistration() {
    console.log('navigate to event register');
    this.route.navigate(['/registereventconfirmation']);
  }
}
