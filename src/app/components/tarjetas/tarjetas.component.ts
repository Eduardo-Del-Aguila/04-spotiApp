import { Component, Input } from '@angular/core';

import { NoimagePipe } from '../../pipes/noimage.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  imports: [NoimagePipe],
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  @Input() items:any =[]

  constructor(private ruta:Router){

  }

  verArtista(item:any){
    let artistaId
    if(item.type === 'artist'){
      artistaId = item.id
    } else{
      artistaId = item.artists[0].id
    }
    this.ruta.navigate(['/artists', artistaId])
    // this.ruta.navigate(['/prueba', artistaId])
  }
}
