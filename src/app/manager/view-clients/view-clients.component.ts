import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'sit'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  id: string;
  name: number;
  surname: number;
  sit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];

