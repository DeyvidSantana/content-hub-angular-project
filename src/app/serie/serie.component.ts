import { Router, ActivatedRoute } from '@angular/router';
import { SerieService } from './../services/serie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, 
    private _serieService: SerieService,
    private _router: Router) { }

  series = [];
  credit = {};

  ngOnInit() {
    this._serieService.getDiscover().subscribe(
      response => {
        this.series = response['results']; 
        console.log(this.series);
                       
      }
    )

    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._serieService.getCastById(id)
        .subscribe(response => {
          this.credit = response;
          console.log(this.credit);
          
        })
    });
  }

  goEdit(serie) {
    console.log(serie)
    this._router.navigate(['series/detalhes', serie.id])
  }

}
