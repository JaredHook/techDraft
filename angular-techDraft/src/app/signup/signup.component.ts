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
  constructor(public dialogRef: MatDialogRef<SignupComponent>, private fb: FormBuilder) {  }
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

  ngOnInit() {
  }
  signupForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    password2: ['', Validators.required]
  }, { validator: PasswordValidator });

  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit() {
    console.log(this.userModel);
    this.dialogRef.close();
  }
}
