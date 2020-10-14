import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../../../services/api/episodes.service';
import {EpisodeModalComponent} from '../episode-modal/episode-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit {

  public episodes: any[] = [];

  constructor(
    private episodesService: EpisodesService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.episodesService.all().then((response) => {
      this.episodes = response.results;
    });
  }


  openDialog(id): void {
    const dialogRef = this.dialog.open(EpisodeModalComponent, {
      width: '550px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
