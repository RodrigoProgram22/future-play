import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesApiService } from 'src/app/service/games-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  juegosNuevos: Game[] = [];
  juegosRelev: Game[] = [];
  constructor(private apiG: GamesApiService) {}

  ngOnInit(): void {
    this.apiG.getGamePorFecha().subscribe((data) => {
      this.juegosNuevos = data.slice(0,4);
    });
    this.apiG.getGameRelevantes().subscribe((data) => {
      this.juegosRelev = data.slice(7,11);
    });
  }
}
