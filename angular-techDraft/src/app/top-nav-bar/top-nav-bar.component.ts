import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { LoginPopoutComponent } from '../login-popout/login-popout.component';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(LoginPopoutComponent, dialogConfig);

    dialogRef.afterClosed().subscribe();
  }

  ngOnInit() {
  }

}
