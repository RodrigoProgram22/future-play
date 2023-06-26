import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesApiService } from 'src/app/service/games-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private apiG: GamesApiService) {}

  ngOnInit(): void {
    this.apiG.getData().subscribe((data) => {
      this.juegos = data;
      console.log(this.juegos);
    });
  }
}
