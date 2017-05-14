import { Component, OnInit } from '@angular/core';
import { KendamaPlayer } from '../kendama-player.model';
import { Router } from '@angular/router';
import { KendamaPlayerService } from '../kendama-player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [KendamaPlayerService]
})

export class PlayerListComponent implements OnInit {
  filterByLocation: string = "allPlayers";
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: KendamaPlayerService){}

  ngOnInit(){
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key]);
  };

  onChange(optionFromMenu) {
    this.filterByLocation = optionFromMenu;
  }
}
