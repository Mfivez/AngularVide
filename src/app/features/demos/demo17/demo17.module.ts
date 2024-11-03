import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo17Component } from './demo17.component';
import { ComponentTestComponent } from './components/component-test/component-test.component';



@NgModule({
  declarations: [
    Demo17Component,
    ComponentTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Demo17Module { }
