import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba',
  imports: [],
  templateUrl: './prueba.component.html'
})
export class PruebaComponent {

  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(respuesta=>{
    })

  }
}
