import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonBoxComponent } from './button-box/button-box.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { GgithabButtonComponent } from './ggithab-button/ggithab-button.component';
import { ShaksCallToActionCompComponent } from './shaks-call-to-action-comp/shaks-call-to-action-comp.component';
import { BottomComponent } from './bottom/bottom.component';
import { ThemeComponent } from './theme/theme.component';
// import { TeamTableComponent } from './team-table/team-table.component';
//import { MyNavComponent } from './my-nav/my-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileCompComponent } from './edit-profile-comp/edit-profile-comp.component';
import { TabComponent } from './tab/tab.component';
import { TeamTableComponent } from './team-table/team-table.component';


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
    TeamTableComponent,
   // MyNavComponent,
    HomePageComponent,
    UserProfileComponent,
    EditProfileCompComponent,
    TabComponent,
    TeamTableComponent
  ],
   
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
