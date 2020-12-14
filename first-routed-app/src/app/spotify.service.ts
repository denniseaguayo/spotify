import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAmFZD2MtQv8AN4Y5AkWfB9fXW7fCaO5Lm6MW2lS2_EFE43CJas3rFEB6oGlQsgccN4qNch2J5YiAMVykw3NVOz-sOvsA0JvHci4hFFDG85R6QfcpmdlE4aMbVIwzn7nNMn2x177wbwmJne6stV2sH3w2D0hKs'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
