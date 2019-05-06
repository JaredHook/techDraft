import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShaksCallToActionCompComponent } from './shaks-call-to-action-comp/shaks-call-to-action-comp.component';
import { NewComponent } from './new_component/new.component'

@NgModule({
  declarations: [
    AppComponent,
    ShaksCallToActionCompComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
