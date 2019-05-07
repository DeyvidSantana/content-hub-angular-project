import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _movieService: MovieService,
    private _router: Router) { }

  movies = [];
  title: string = "";
  searches = ["Name", "Language", "Release Year"];

  ngOnInit() {
    this.getAllMovies();
  }

  findMovieByTitle(title){  
  
    this._movieService.findMovieByTitle(title).subscribe(
      response => {
        this.movies = response['content'];      
      }
    )

    if(title == ""){
      this.getAllMovies();
    }
  }

  getAllMovies(){
    this._movieService.getDiscover().subscribe(
      response => {
        this.movies = response['content'];
        console.log(this.movies);
        
      }
    )
  }

  showDetails(movie) {
    console.log(movie);
    
    this._router.navigate(['/movies/', movie.id]);
  }

}
