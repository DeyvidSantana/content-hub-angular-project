import { Program } from './../../models/program';
import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,    
    private _movieService: MovieService,
    private location: Location) { }

  idMovie;
  movie = {};
  movieUpdated: Program;

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.idMovie = id;

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response; 
        })
    });

    this.movieUpdated = new Program({
      title: "",
      language: "",
      overview: "",
	    originCountry: "",
      releaseYear: 0,
	    runtime: 0,
      seansons: 0
    });

  }

  public onFormSubmit(movie){
    
    let saveConfirm = confirm("Do you really want to save changes of this movie?");

    if(saveConfirm){
      this.buildMovieUpdated(movie);    
    
      this._movieService.updateMovie(this.idMovie, this.movieUpdated)
          .subscribe(response => { 
            alert("Movie updated successfully.");
            this.location.back();          
      })
    }
    
  }

  buildMovieUpdated(movie){
    
      this.movieUpdated.title = movie.form.controls.title.value,
      this.movieUpdated.language = movie.form.controls.language.value,
      this.movieUpdated.overview = movie.form.controls.overview.value,
	    this.movieUpdated.originCountry = movie.form.controls.originCountry.value,
      this.movieUpdated.releaseDate = movie.form.controls.releaseDate.value,
	    this.movieUpdated.runtime = movie.form.controls.runtime.value
    
  }

}
