import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,    
    private _movieService: MovieService,
    private location: Location) { }
    
  movie = {};
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;                  
        })
    });
    
  }

  deleteMovie(idMovie){  
    
    let deleteConfirm = confirm("Do you really want to delete this movie?");

    if(deleteConfirm){
      this._movieService.deleteMovie(idMovie)
        .subscribe(response => {
          alert("Movie deleted successfully.");  
          this.location.back();               
      })
    }
  }

}
