 import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  get ngOnInit(): () => void {
    return this._ngOnInit;
  }

  set ngOnInit(value: () => void) {
    this._ngOnInit = value;
  }
  email = '';
  password = '';
  constructor() { }

  // tslint:disable-next-line:variable-name
  private _ngOnInit: () => void = () => {
  }
  submitForm = () => {
    alert('email : ' + this.email + '\npass : ' + this.password);
  }


}
