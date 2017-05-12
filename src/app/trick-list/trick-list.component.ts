import { Component, OnInit } from '@angular/core';
import { Trick } from '../trick.model';

@Component({
  selector: 'app-trick-list',
  templateUrl: './trick-list.component.html',
  styleUrls: ['./trick-list.component.css']
})
export class TrickListComponent implements OnInit {
  filterByDifficulty: string = "allTricks";

  constructor() { }

  ngOnInit() {
  }

  onChange(optionFromMenu) {
    this.filterByDifficulty = optionFromMenu;
  }

  tricks: Trick[] = [
    new Trick("Moshikame", "Beginner", "https://youtu.be/gyCbfVgVoGg"),
    new Trick("Lighthouse", "Beginner", "https://youtu.be/ppVjCcVCzxg"),
    new Trick("Airplane", "Beginner", "https://youtu.be/g-bf2UsAKnU"),
    new Trick("Around The World", "Beginner", "https://youtu.be/xOY4nD9bVts"),
    new Trick("Swing Spike", "Intermediate", "https://youtu.be/w-RfbsOIsHg"),
    new Trick("Lighthouse Flip", "Intermediate", "https://youtu.be/R3WqyCwGf8c"),
    new Trick("Jumping Stick", "Intermediate", "https://youtu.be/S-hegB60WPs"),
    new Trick("Lighthouse Trade Spike", "Intermediate", "https://youtu.be/mqFv-aiKth8"),
    new Trick("UFO", "Advanced", "https://youtu.be/F1mH031HMFk"),
    new Trick("Whirlwind", "Advanced", "https://youtu.be/e0yzlVvpfjU"),
    new Trick("Around USA", "Advanced", "https://youtu.be/MjQ_khAeB-k"),
    new Trick("Lunar Lander", "Advanced", "https://youtu.be/qNd-T1VrAxk"),
    new Trick("Lighthouse Juggle Lighthouse", "Pro", "https://youtu.be/k9oiDND4xBw"),
    new Trick("Inward Lunar", "Pro", "https://youtu.be/PnrNsjEazTk"),
    new Trick("UFO Tap Back", "Pro", "https://youtu.be/H9X2ef2LreQ"),
    new Trick("1 Turn Tap Airplane", "Pro", "https://youtu.be/Dlyt5Tl14Nw")
  ]

}
