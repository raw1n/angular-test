import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyloadComponent } from './lazyload.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyloadComponent]
})
export class LazyModule { }
