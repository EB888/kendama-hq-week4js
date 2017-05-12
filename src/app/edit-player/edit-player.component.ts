import { Component, Input, OnInit } from '@angular/core';
import { KendamaPlayerService } from '../kendama-player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [KendamaPlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: KendamaPlayerService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToUpdate){
    this.playerService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete){
    if(confirm("Are you sure you want to delete this player?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

}
