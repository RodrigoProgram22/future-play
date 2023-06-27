import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesApiService } from 'src/app/service/games-api.service';

@Component({
  selector: 'app-juegos-genero',
  templateUrl: './juegos-genero.component.html',
  styleUrls: ['./juegos-genero.component.css'],
})
export class JuegosGeneroComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private apiG: GamesApiService) {}

  ngOnInit(): void {
    this.apiG.getGameAlfab().subscribe((data) => {
      this.juegos = data;
    });
  }
  buscarTodos() {
    this.apiG.getGameAlfab().subscribe((data) => {
      this.juegos = data;
    });
  }
  buscarJuego(juego: string) {
    this.apiG.getGameGenero(juego).subscribe((data) => {
      this.juegos = data;
    });
  }
}
