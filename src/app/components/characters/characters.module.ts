import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [CharacterListComponent],
  exports: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CharactersRoutingModule,
    SharedModule,
  ]
})
export class CharactersModule { }
