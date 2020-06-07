import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  chargeCard(token: string) {
    // const headers = new Headers({ token: token, amount: 100 });
    // this.http
    //   .post('http://localhost:8080/payment/charge', {}, { headers: headers })
    //   .subscribe((resp) => {
    //     console.log(resp);
    //   });
  }
  chargeCreditCard() {
    let form = document.getElementsByTagName('form')[0];
    (<any>window).Stripe.card.createToken(
      {
        number: form.cardNumber.value,
        exp_month: form.expMonth.value,
        exp_year: form.expYear.value,
        cvc: form.cvc.value,
      },
      (status: number, response: any) => {
        if (status === 200) {
          let token = response.id;
          this.chargeCard(token);
        } else {
          console.log(response.error.message);
        }
      }
    );
  }
}
