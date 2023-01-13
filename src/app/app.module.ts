import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    // FirstComponent,
    SecondComponent,
    FirstComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
