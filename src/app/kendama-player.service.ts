import { Injectable } from '@angular/core';
import { KendamaPlayer } from './kendama-player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class KendamaPlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers(){
    return this.players;
  }

  addPlayer(newPlayer: KendamaPlayer) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string){
    return this.database.object('players/' + playerId);
  }

  updatePlayer(localUpdatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({name: localUpdatedPlayer.name,
                                  style: localUpdatedPlayer.style,
                                  biography: localUpdatedPlayer.biography,
                                  image: localUpdatedPlayer.image,
                                  instagram: localUpdatedPlayer.instagram,
                                  otherInfo: localUpdatedPlayer.otherInfo,
                                  location: localUpdatedPlayer.location
                                });
  }

  deletePlayer(localPlayerToDelete){
    var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }

}
