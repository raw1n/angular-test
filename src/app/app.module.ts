import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { WordComponent } from './word/word.component';

import {WordService } from './services/word.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TableComponent } from './table/table/table.component';
import { TableRowComponent } from './table/table-row/table-row.component';

import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';
import {RepoService} from './rxjs-test/repo.service';
import { InoutputComponent } from './inoutput/inoutput.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    WordComponent,
    SignupFormComponent,
    TableComponent,
    TableRowComponent,
    RxjsTestComponent,
    InoutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [WordService, RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
