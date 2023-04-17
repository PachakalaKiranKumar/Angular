import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FootpartComponent } from './footpart/footpart.component';
import { MiddlepartComponent } from './middlepart/middlepart.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FootpartComponent,
    MiddlepartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
