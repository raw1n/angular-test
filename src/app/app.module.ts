import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { WordComponent } from './word/word.component';

import {WordService } from './services/word.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
