import { Component, OnInit } from '@angular/core';
import {Time} from '../edit-destination/edit-destination.component'
export interface Destination {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css']
})
export class SearchClientsComponent implements OnInit {
  destinations: Destination[] = [
    {value: 'Yaounde', viewValue: 'Yaounde'},
   
  ];

  constructor() { }

  ngOnInit() {
  }

}
