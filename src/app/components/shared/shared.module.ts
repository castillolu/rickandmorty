import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    FullComponent
  ]
})
export class SharedModule { }
