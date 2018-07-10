import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms';


@Component({

  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form:FormGroup
    constructor(private formBuilder: FormBuilder){}

    ngOnInit(){
        this.form= this.formBuilder.group({
          name:['',Validators.required],
          surname:['',Validators.required],
          id:['',Validators.required],
         tarif:['',Validators.required]
        })
  
      }
}
