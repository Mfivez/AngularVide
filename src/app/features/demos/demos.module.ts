import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemosRoutingModule } from './demos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { Demo9Module } from './demo9/demo9.module';
import { Demo5Module } from './demo5/demo5.module';
import { Demo6Module } from './demo6/demo6.module';
import { Demo7Module } from './demo7/demo7.module';
import { Demo10Module } from './demo10/demo10.module';
import { Demo8Module } from './demo8/demo8.module';
import { Demo11Module } from './demo11/demo11.module';
import { Demo12Module } from './demo12/demo12.module';
import { Demo13Module } from './demo13/demo13.module';
import { Demo14Module } from './demo14/demo14.module';
import { Demo15Module } from './demo15/demo15.module';
import { Demo16Module } from './demo16/demo16.module';
import { Demo17Module } from './demo17/demo17.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    Demo5Module,
    Demo6Module,
    Demo7Module,
    Demo8Module,
    Demo9Module,
    Demo10Module,
    Demo11Module,
    Demo12Module,
    Demo13Module,
    Demo14Module,
    Demo15Module,
    Demo16Module,
    Demo17Module,
  ],
  exports: []
})
export class DemosModule { }
