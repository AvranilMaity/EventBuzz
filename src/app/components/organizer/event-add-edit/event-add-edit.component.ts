import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-add-edit',
  templateUrl: './event-add-edit.component.html',
  styleUrls: ['./event-add-edit.component.css'],
})
export class EventAddEditComponent implements OnInit {
  proceed: number;
  files: File[] = [];

  constructor() {}

  ngOnInit() {
    this.proceed = 0;
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onProceed() {
    if (this.proceed > 4) {
      this.proceed = 0;
    } else {
      this.proceed += 1;
    }
  }
}
