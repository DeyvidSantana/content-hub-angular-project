import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _serieService: SerieService,
    private location: Location) { }

  tv = {};
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      
      this._serieService.getById(id)
        .subscribe(response => {
          this.tv = response;
        })
    });
  }

  deleteTv(idTv){  
    
    let deleteConfirm = confirm("Do you really want to delete this tv serie?");

    if(deleteConfirm){
      this._serieService.deleteTv(idTv)
        .subscribe(response => {
          alert("TV serie deleted successfully.");  
          this.location.back();               
      })
    }
  }
}
