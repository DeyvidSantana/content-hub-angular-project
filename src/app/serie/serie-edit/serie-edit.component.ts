import { SerieService } from './../serie.service';
import { ActivatedRoute } from '@angular/router';
import { Program } from './../../models/program';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,    
    private _serieService: SerieService,
    private location: Location) { }

  idTv;
  tv = {};
  tvUpdated: Program;

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.idTv = id;

      this._serieService.getById(id)
        .subscribe(response => {
          this.tv = response; 
        })
    });

    this.tvUpdated = new Program({
      title: "",
      language: "",
      overview: "",
	    originCountry: "",
      releaseDate: 0,
	    runtime: 0,
      seansons: 0
    });

  }

  public onFormSubmit(tv){   

    let saveConfirm = confirm("Do you really want to save changes of this tv serie?");

    if(saveConfirm){
      this.buildTvUpdated(tv);    
    
      this._serieService.updateTv(this.idTv, this.tvUpdated)
          .subscribe(response => { 
            alert("TV updated successfully.");
            this.location.back();                  
      })
    }

  }

  buildTvUpdated(tv){

      this.tvUpdated.title = tv.form.controls.title.value,
      this.tvUpdated.language = tv.form.controls.language.value,
      this.tvUpdated.overview = tv.form.controls.overview.value,
	    this.tvUpdated.originCountry = tv.form.controls.originCountry.value,
      this.tvUpdated.releaseDate = tv.form.controls.releaseDate.value,
	    this.tvUpdated.runtime = tv.form.controls.runtime.value,
      this.tvUpdated.seansons = tv.form.controls.seansons.value
    
  }
}
