import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { CharacterListComponent } from './character-list/character-list.component';
import {CharacterModalComponent} from './character-modal/character-modal.component';


@NgModule({
  declarations: [CharacterListComponent, CharacterModalComponent],
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
