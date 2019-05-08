import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _serieService: SerieService) { }

  tv = {};
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log("este id" + id);
      
      this._serieService.getById(id)
        .subscribe(response => {
          this.tv = response;
          console.log(this.tv);
          
        })
    });
  }
}
