import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  formAjout:FormGroup;

  constructor() { }

  ngOnInit() {
    this.formAjout = new FormGroup({
      Email: new FormControl('',[Validators.required,Validators.email]),
      Password: new FormControl('' ,[Validators.required,Validators.minLength(10)])
    })
  }
  test(){
    console.log(this.formAjout);
  }

}
