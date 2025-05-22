import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  imports: [],
  templateUrl: './artist.component.html'
})
export class ArtistComponent {


  constructor(private router:ActivatedRoute){
    this.router.params.subscribe(respuesta=>{
      console.log(respuesta)
    })
  }

}
