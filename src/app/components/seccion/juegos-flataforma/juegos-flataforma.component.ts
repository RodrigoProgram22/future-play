import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesApiService } from 'src/app/service/games-api.service';

@Component({
  selector: 'app-juegos-flataforma',
  templateUrl: './juegos-flataforma.component.html',
  styleUrls: ['./juegos-flataforma.component.css']
})
export class JuegosFlataformaComponent implements OnInit {
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
    this.apiG.getGamePlataforma(juego).subscribe((data) => {
      this.juegos = data;
    });
  }
}
