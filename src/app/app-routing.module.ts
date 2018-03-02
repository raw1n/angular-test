import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { WordComponent} from './word/word.component';


const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'word', component: WordComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
