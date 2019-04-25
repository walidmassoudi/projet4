import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  formAjout:FormGroup;
  formModif:FormGroup;
  tableTodo: any;
  index: number;
  constructor() {
    this.formModif = new FormGroup({
      Taskname: new FormControl('',[Validators.required,Validators.minLength(8)]),
      Birdhdate: new FormControl('' ,[Validators.required]),
      Description: new FormControl('',[Validators.required])
    });
   }

  ngOnInit() {
    this.formAjout = new FormGroup({
      Taskname: new FormControl('',[Validators.required,Validators.minLength(8)]),
      Birdhdate: new FormControl('' ,[Validators.required]),
      Description: new FormControl('',[Validators.required])
    });
    
    this.tableTodo = JSON.parse(localStorage.getItem('TODO'));

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
    this.ngOnInit();
  }
  delete(i){
    let tab = JSON.parse(localStorage.getItem("TODO"));
    tab.splice(i,1);
    localStorage.setItem("TODO", JSON.stringify(tab));
    this.ngOnInit();
  }
  modifier(){
    let tab1 = JSON.parse(localStorage.getItem("TODO"));
        tab1[this.index]=this.formModif.value
    localStorage.setItem("TODO", JSON.stringify(tab1));
    this.ngOnInit();
  }
  getTask(todo,i){
    this.index = i ;
    this.formModif = new FormGroup({
      Taskname: new FormControl(todo.Taskname,[Validators.required,Validators.minLength(8)]),
      Birdhdate: new FormControl(todo.Birdhdate ,[Validators.required]),
      Description: new FormControl(todo.Description,[Validators.required])
    });
  }
}
