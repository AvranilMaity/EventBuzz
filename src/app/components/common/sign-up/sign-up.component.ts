import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  proceed: boolean = false;
  constructor() {}

  ngOnInit() {}

  onProceed() {
    console.log(this.proceed);
    this.proceed = !this.proceed;
    console.log(this.proceed);
  }
}
