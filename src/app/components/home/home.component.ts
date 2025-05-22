import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

import { NoimagePipe } from '../../pipes/noimage.pipe';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { LoadingComponent } from "../shared/loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TarjetasComponent, CommonModule, LoadingComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones:any[] = []
  constructor( private httpClient:HttpClient,
    private spoti:SpotifyService
  ){
    this.spoti.getNewReleases()
    .subscribe((data:any) => {
      this.nuevasCanciones = data
    })
  }
  }

