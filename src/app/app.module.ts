import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFirstComponent } from './question-first/question-first.component';
import { PuzzleSecondComponent } from './puzzle-second/puzzle-second.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFirstComponent,
    PuzzleSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
