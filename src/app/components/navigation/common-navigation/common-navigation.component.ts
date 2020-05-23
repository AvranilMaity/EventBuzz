import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-common-navigation',
  templateUrl: './common-navigation.component.html',
  styleUrls: ['./common-navigation.component.css']
})
export class CommonNavigationComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

}
