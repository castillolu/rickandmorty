import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/api/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  public characters: any[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.all().then((response) => {
      this.characters = response.results;
      console.log(this.characters);
    });
  }

}
