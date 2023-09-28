import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliApiService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "bf43ea876cd3261f8bde8d6c4381c3ed";

  bannerapi = ${this.baseurl}/trending/all/week?api_key=${this.apikey}

}
