import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesApiService } from 'src/app/service/games-api.service';

@Component({
  selector: 'app-juegos-nuevos',
  templateUrl: './juegos-nuevos.component.html',
  styleUrls: ['./juegos-nuevos.component.css']
})
export class JuegosNuevosComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private apiG: GamesApiService) {}

  ngOnInit(): void {
    this.apiG.getGamePorFecha().subscribe((data) => {
      this.juegos = data;
    });
  }
}
