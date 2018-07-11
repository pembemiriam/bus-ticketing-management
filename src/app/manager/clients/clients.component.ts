import { Component, OnInit } from '@angular/core';
import {Time} from '../edit-destination/edit-destination.component'
export interface Destination {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  destinations: Destination[] = [
    {value: 'Yaounde', viewValue: 'Yaounde'},
   
  ];

  constructor() { }

  ngOnInit() {
  }

}
