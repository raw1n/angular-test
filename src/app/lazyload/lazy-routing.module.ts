import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadComponent } from './lazyload.component';

const routes: Routes = [
    {
        path: '',
        component: LazyloadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyRoutingModule { }
