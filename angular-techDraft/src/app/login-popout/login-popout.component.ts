import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-popout',
  templateUrl: './login-popout.component.html',
  styleUrls: ['./login-popout.component.css']
})
export class LoginPopoutComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginPopoutComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
