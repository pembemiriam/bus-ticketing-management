import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms';

@Component({

  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form:FormGroup
  constructor(private formBuilder: FormBuilder){}

    ngOnInit(){
      this.form= this.formBuilder.group({
        name:['',Validators.required],
        email:['',Validators.required]
      })

    }
}
