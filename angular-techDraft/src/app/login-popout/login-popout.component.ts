import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-popout',
  templateUrl: './login-popout.component.html',
  styleUrls: ['./login-popout.component.css']
})
export class LoginPopoutComponent implements OnInit {
  get onNoClick(): () => void {
    return this._onNoClick;
  }

  set onNoClick(value: () => void) {
    this._onNoClick = value;
  }

  constructor(
    public dialogRef: MatDialogRef<LoginPopoutComponent>) { }

  // tslint:disable-next-line:variable-name
  private _onNoClick = (): void => {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
