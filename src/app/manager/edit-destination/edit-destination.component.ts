import { Component, OnInit } from '@angular/core';

export interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-destination',
  templateUrl: './edit-destination.component.html',
  styleUrls: ['./edit-destination.component.css']
})
export class EditDestinationComponent implements OnInit {

  times: Time[] = [
    {value: '9:00pm', viewValue: '9:00pm'},
   
  ];


  constructor() { }

  ngOnInit() {
  }

}
