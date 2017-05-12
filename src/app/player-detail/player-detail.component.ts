import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { KendamaPlayer } from '../kendama-player.model';
import { KendamaPlayerService } from '../kendama-player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [KendamaPlayerService]
})

export class PlayerDetailComponent implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: KendamaPlayerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.playerId = urlParameters['id'];
   });
   this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}
