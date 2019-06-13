import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { User } from '../user';
import { PasswordValidator } from '../Validators/password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SignupComponent>, private fb: FormBuilder) { }
  //these are some getters to help with readability in the html
  get userName() {
    return this.signupForm.get('userName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get password2() {
    return this.signupForm.get('password2');
  }
  userModel = new User('', '', '', '', '');
  show: Boolean = false;
  showEye: Boolean = false;

  ngOnInit() {
  }
  signupForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],// this pattern is something i found to require 8 characters, a special character, a number, and at least one capital and lowercase letter
    password2: ['', Validators.required]
  }, { validator: PasswordValidator });//custom password comparison validator

  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit() {
    console.log(this.userModel);
    this.dialogRef.close();
  }

  showPassword() {
    this.show = !this.show;
    this.showEye = !this.showEye;
  }

  showPassword2() {
    this.show2 = !this.show2;
    this.showEye2 = !this.showEye2;
  }
}
