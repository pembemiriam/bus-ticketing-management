import { Component, OnInit } from '@angular/core';

@Component({

  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.css']
})
export class ListDestinationComponent implements OnInit {
 yde1 =true;
 dla1=false;
 baf1=false;
 bda1=false;
  constructor() { }

  ngOnInit() {
  }

  yde():void{
    this.dla1=false;
    this.yde1=true;
    this.baf1=false;
    this.bda1=false;
  }

  dla():void{
    this.dla1=true;
    this.yde1=false;
    this.baf1=false;
    this.bda1=false;
  }

  baf():void{
    this.yde1=false;
    this.dla1=false;
    this.baf1=true;
    this.bda1=false;
  }

  bda():void{
    this.yde1=false;
    this.dla1=false;
    this.baf1=false;
    this.bda1=true;
  }
}
