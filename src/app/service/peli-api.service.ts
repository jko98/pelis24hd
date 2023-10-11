import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// interfaz de datos

interface Movie {
  id: number;
  tittle: string;
  poster_path: string;
  overview: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliApiService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "bf43ea876cd3261f8bde8d6c4381c3ed";
  
  banerApiData():Observable<Movie[]>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`).pipe(
      map(data => data[''].map(movie => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview
      }))))
  }
  
    
  
   


  

}
