import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-all-album',
  templateUrl: './all-album.component.html',
  styleUrls: ['./all-album.component.css']
})
export class AllAlbumComponent implements OnInit {
  routeObs: Observable<ParamMap>;

  album : any;

  spotifyServiceObs: any;

  location: any;

 constructor(
    private route: ActivatedRoute,
    private service: SpotifyService ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let artistAId = params.get('id');
    console.log (artistAId);
    this.spotifyServiceObs = this.service.getAlbum2(artistAId) ;
    this.spotifyServiceObs.subscribe((data)=>this.album = data)
  }



 back() : void
  {
    this.location.back();
  }

}
