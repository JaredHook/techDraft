import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AboutComponent } from './about/about.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'userProfile/editProfile', component: EditProfileCompComponent }
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
    TeamTableComponent,
    AboutComponent,
    ProfileMenuComponent,
    ProgressBarComponent,
    SignupComponent
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginPopoutComponent,
    SignupComponent
  ]
})
export class AppModule { }
