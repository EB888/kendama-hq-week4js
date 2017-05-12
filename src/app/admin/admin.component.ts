import { Component, OnInit } from '@angular/core';
import { KendamaPlayer } from '../kendama-player.model';
import { KendamaPlayerService } from '../kendama-player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [KendamaPlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: KendamaPlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, style: string, biography: string, image: string, instagram: string, otherInfo: string) {
    var newPlayer: KendamaPlayer = new KendamaPlayer(name, style, biography, image, instagram, otherInfo);
    this.playerService.addPlayer(newPlayer);
  }
}
