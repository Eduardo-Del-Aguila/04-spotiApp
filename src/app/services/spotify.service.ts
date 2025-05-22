import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http:HttpClient ) {
  }

  getQuery( query:string ){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC9sEj4ixhFAV0NgkyNMFYKNy_0Ge-OAjuRSQZMUIFg5bHmrShTl_QBRnHNOFAyHCboDt27g5ssIi_JO9Bho1YaO1Moqy4MVxdkE_jXZ_Kg6Ug4JUVPwkdXWBJAnrCu49ynfGwGjsY'
    })

    return this.http.get(url,{headers})
  }

  getNewReleases(){
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQA_qHluBss_tOg5R-NTMrCV594LvBw99G9rW0eiHGr2-fo-WpjpFPtm71wmbMMfW05oj2Ym-yctJqHnoNmxvKc43hDg-o_N6gkD-2ls5_t-lec2E8DtQLUKkuiZYiEeA1sGYCZCH8w'
    // })
    return this.getQuery('browse/new-releases')
      .pipe(map((info:any) => info['albums'].items))
  }

  getArtista(term:String){

    return this.getQuery(`search?offset=0&limit=20&query=${term}&type=artist&locale=es-ES,es;q%3D0.9`)
          .pipe(map((info:any)=> info['artists'].items))
  }

  getIdArtists(idx:number){
    

  }

  }

