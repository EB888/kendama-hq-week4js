import { Component, OnInit } from '@angular/core';
import { Trick } from '../trick.model';

@Component({
  selector: 'app-trick-list',
  templateUrl: './trick-list.component.html',
  styleUrls: ['./trick-list.component.css']
})
export class TrickListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tricks: Trick[] = [
    new Trick("Lighthouse", "Beginner", "TEST"),
    new Trick("Lighthouse", "Beginner", "TEST"),
    new Trick("Lighthouse", "Beginner", "TEST"),
    new Trick("Lighthouse", "Beginner", "TEST"),
    new Trick("Lighthouse", "Intermediate", "TEST"),
    new Trick("Lighthouse", "Intermediate", "TEST"),
    new Trick("Lighthouse", "Intermediate", "TEST"),
    new Trick("Lighthouse", "Intermediate", "TEST"),
    new Trick("Lighthouse", "Advanced", "TEST"),
    new Trick("Lighthouse", "Advanced", "TEST"),
    new Trick("Lighthouse", "Advanced", "TEST"),
    new Trick("Lighthouse", "Advanced", "TEST"),
    new Trick("Lighthouse", "Pro", "TEST"),
    new Trick("Lighthouse", "Pro", "TEST"),
    new Trick("Lighthouse", "Pro", "TEST"),
    new Trick("Lighthouse", "Pro", "TEST"),
    new Trick("Lighthouse", "Pro", "TEST")
  ]

}
