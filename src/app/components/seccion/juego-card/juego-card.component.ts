import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styleUrls: ['./juego-card.component.css']
})
export class JuegoCardComponent implements OnInit {
  @Input() game! :Game;
  constructor() { }

  ngOnInit(): void {
  }

}
