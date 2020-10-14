import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../../modules/angular-material.module';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeModalComponent } from './episode-modal/episode-modal.component';


@NgModule({
  declarations: [EpisodeListComponent, EpisodeModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
