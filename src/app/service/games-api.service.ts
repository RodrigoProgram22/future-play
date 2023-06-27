import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {
  private urlAPI: string = 'https://www.freetogame.com/api/games';
  constructor(private http: HttpClient) {}

  public getGame(): Observable<any> {
    return this.http.get(this.urlAPI);
  }
  public getGamePorFecha(): Observable<any> {
    return this.http.get(this.urlAPI+"?sort-by=date");
  }
  public getGameAlfab(): Observable<any> {
    return this.http.get(this.urlAPI+"?sort-by=alphabetical");
  }
  public getGameRelevantes(): Observable<any> {
    return this.http.get(this.urlAPI+"?sort-by=relevance");
  }
  public getGameGenero(genero:string): Observable<any> {
    return this.http.get(`${this.urlAPI}?category=${genero}`);
  }
  public getGamePlataforma(plataf:string): Observable<any> {
    return this.http.get(`${this.urlAPI}?platform=${plataf}`);
  }
}
