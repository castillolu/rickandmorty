import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EpisodesService} from '../../../services/api/episodes.service';

@Component({
  selector: 'app-episode-modal',
  templateUrl: './episode-modal.component.html',
  styleUrls: ['./episode-modal.component.sass']
})
export class EpisodeModalComponent  implements OnInit {

  public episode: any;

  constructor(
    public dialogRef: MatDialogRef<EpisodeModalComponent>,
    public episodesService: EpisodesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.episodesService.show(this.data.id).then((response) => {
      this.episode = response;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
