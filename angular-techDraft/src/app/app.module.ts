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
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamTableComponent } from './team-table/team-table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

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
    TeamTableComponent,
    HomePageComponent,
    AboutComponent
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
