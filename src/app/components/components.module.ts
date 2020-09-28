import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AngularMaterialModule } from '../modules/angular-material.module';
import { CharactersModule } from './characters/characters.module';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    CharactersModule,
    SharedModule,
  ]
})
export class ComponentsModule { }
