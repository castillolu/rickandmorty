import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/api/characters.service';
import {EpisodeModalComponent} from '../../episodes/episode-modal/episode-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {CharacterModalComponent} from '../character-modal/character-modal.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  public characters: any[] = [];

  constructor(
    private charactersService: CharactersService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.charactersService.all().then((response) => {
      this.characters = response.results;
    });
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(CharacterModalComponent, {
      width: '550px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
