import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,    
    private _movieService: MovieService) { }

  movie = {};

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response; 
          console.log(this.movie + "aeeeee");                   
        })
    });
  }

}
