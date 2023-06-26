import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {
  private urlAPI: string = 'https://www.freetogame.com/api/games';
  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get(this.urlAPI);
  }
}
