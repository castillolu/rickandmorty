import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'personajes',
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'episodios',
    loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
