import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CharactersService} from '../../../services/api/characters.service';

@Component({
  selector: 'app-episode-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.sass']
})
export class CharacterModalComponent  implements OnInit {

  public character: any;

  constructor(
    public dialogRef: MatDialogRef<CharacterModalComponent>,
    public charactersService: CharactersService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.charactersService.show(this.data.id).then((response) => {
      this.character = response;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
