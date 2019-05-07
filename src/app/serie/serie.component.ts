import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  constructor(private _serieService: SerieService,
    private _router: Router) { }

  tvs = [];

  ngOnInit() {
    this.getAllTvs();
  }

  goEdit(serie) {
    this._router.navigate(['series/detalhes', serie.id])
  }

  getAllTvs(){
    this._serieService.getDiscover().subscribe(
      response => {
        this.tvs = response['content'];               
        console.log(this.tvs);
      }
    )
  }

  showDetails(tv) {
    console.log(tv);  
    this._router.navigate(['/tvs/', tv.id]);
  }

  

}
