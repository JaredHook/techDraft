import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';
import { ContentCardComponent } from './content-card/content-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsletterformComponent,
    ContentCardComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
