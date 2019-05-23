import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonBoxComponent } from './button-box/button-box.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { GgithabButtonComponent } from './ggithab-button/ggithab-button.component';
import { ShaksCallToActionCompComponent } from './shaks-call-to-action-comp/shaks-call-to-action-comp.component';
import { BottomComponent } from './bottom/bottom.component';
import { ThemeComponent } from './theme/theme.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamTableComponent } from './team-table/team-table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPopoutComponent } from './login-popout/login-popout.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileCompComponent } from './edit-profile-comp/edit-profile-comp.component';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'userProfile', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonBoxComponent,
    GgithabButtonComponent,
    ShaksCallToActionCompComponent,
    AppComponent,
    NewsletterformComponent,
    TopNavBarComponent,
    BottomComponent,
    ThemeComponent,
    SidebarComponent,
    HomePageComponent,
    LoginPopoutComponent,
    LoginComponent,
    UserProfileComponent,
    EditProfileCompComponent,
    TabComponent,
    TeamTableComponent
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginPopoutComponent]
})
export class AppModule { }
