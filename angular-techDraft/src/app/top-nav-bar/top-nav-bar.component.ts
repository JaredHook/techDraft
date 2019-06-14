import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { LoginPopoutComponent } from '../login-popout/login-popout.component';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openLoginDialog(): void {
    const loginDialogConfig = new MatDialogConfig();
    const loginDialogRef = this.dialog.open(LoginPopoutComponent, loginDialogConfig);
    /*loginDialogRef.afterClosed().subscribe();*/
  }

  openSignupDialog(): void {
    const signupDialogConfig = new MatDialogConfig();
    const signupDialogRef = this.dialog.open(SignupComponent, signupDialogConfig);
    /*signupDialogRef.afterClosed().subscribe();*/
  }

 

  ngOnInit() {
  }

}
