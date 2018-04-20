import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { WordComponent} from './word/word.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {TableComponent} from './table/table/table.component';
import {LazyloadComponent} from './lazyload/lazyload.component';
import {RxjsTestComponent} from './rxjs-test/rxjs-test.component';
import {InoutputComponent} from './inoutput/inoutput.component';



const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'word', component: WordComponent },
    { path: 'signupform', component: SignupFormComponent },
    { path: 'table', component: TableComponent },
    { path: 'lazyload', loadChildren: './lazyload/lazy.module#LazyModule' },
    { path: 'rxjs', component: RxjsTestComponent },
    { path: 'inout', component: InoutputComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
