import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';
import { ContentCardComponent } from './content-card/content-card.component'; 
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GgithabButtonComponent } from './ggithab-button/ggithab-button.component';
import { ShaksCallToActionCompComponent } from './shaks-call-to-action-comp/shaks-call-to-action-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    GgithabButtonComponent,
    ShaksCallToActionCompComponent,
    NewsletterformComponent,
    TopNavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
