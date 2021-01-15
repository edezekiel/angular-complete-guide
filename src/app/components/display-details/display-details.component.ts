import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showDetails: boolean = false;
  clickTimeStamps: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(e: any) {
    this.showDetails = !this.showDetails;
    this.clickTimeStamps.push(e.timeStamp);
    console.log(this.clickTimeStamps);
  }

}
