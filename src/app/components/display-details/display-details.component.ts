import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit, OnChanges {
  showDetails: boolean = false;
  clickTimeStamps: Array<any> = [];

  constructor() { }

  ngOnChanges(changes) {
    console.log('ngOnChanges Called, changes = ', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  toggleDetails(e: any) {
    this.showDetails = !this.showDetails;
    this.clickTimeStamps.push(e.timeStamp);
    console.log(this.clickTimeStamps);
  }

}
