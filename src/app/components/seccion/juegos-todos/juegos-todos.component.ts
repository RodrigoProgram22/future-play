import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesApiService } from 'src/app/service/games-api.service';

@Component({
  selector: 'app-juegos-todos',
  templateUrl: './juegos-todos.component.html',
  styleUrls: ['./juegos-todos.component.css'],
})
export class JuegosTodosComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private apiG: GamesApiService) {}

  ngOnInit(): void {
    this.apiG.getGameAlfab().subscribe((data) => {
      this.juegos = data;
      console.log(this.juegos);
    });
  }
}
