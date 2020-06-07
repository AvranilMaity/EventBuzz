import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    setTimeout(function () {
      let viewheight = $(window).height();
      let viewwidth = $(window).width();
      let viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute(
        'content',
        'height=' +
          viewheight +
          'px, width=' +
          viewwidth +
          'px, initial-scale=1.0'
      );
    }, 300);
  }
  title = 'EventBuzz';
}
