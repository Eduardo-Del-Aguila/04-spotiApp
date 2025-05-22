import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { subscribeOn } from 'rxjs';

import { NoimagePipe } from '../../pipes/noimage.pipe';

import { TarjetasComponent } from '../tarjetas/tarjetas.component';

@Component({
  selector: 'app-search',
  imports: [TarjetasComponent],
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[] = []
  constructor(private spoti:SpotifyService
  ){

  }

  buscar(termino:string){
    this.spoti.getArtista(termino)
    .subscribe( (data:any)=>{
      this.artistas=data
      console.log(data)
    })
  }

  

}
