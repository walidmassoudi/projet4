import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  formAjout:FormGroup;

  constructor() { }

  ngOnInit() {
    this.formAjout = new FormGroup({
      Taskname: new FormControl('',[Validators.required,Validators.minLength(8)]),
      Birdhdate: new FormControl('' ,[Validators.required]),
      Description: new FormControl('',[Validators.required])
    })
  }
  add(){
    console.log(this.formAjout.value);
    //localStorage.setItem("TODO", JSON.stringify(this.formAjout.value));
    var tabtodo = JSON.parse(localStorage.getItem("TODO"));
    if (tabtodo == null) {
        tabtodo = [];
    }
    tabtodo.push(this.formAjout.value);
    localStorage.setItem("TODO", JSON.stringify(tabtodo));
  }

  aff(){

  }

}

