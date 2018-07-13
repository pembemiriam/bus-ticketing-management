import { Component, OnInit } from '@angular/core';
export interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent implements OnInit {
  times: Time[] = [
    {value: '9:00pm', viewValue: '9:00pm'},
   
  ];


  constructor() { }

  ngOnInit() {
  }

}
