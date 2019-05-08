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
  searches = ["Name", "Language", "Release Year"];
  selectedOption: string = "Name";

  ngOnInit() {
    this.getAllMovies();
  }

  findMovies(condition){
    
    console.log(this.selectedOption);
    

    switch(this.selectedOption){

      case "Name":
        this.findMovieByTitle(condition);      
        break;

      case "Language":
        this.findMovieByLanguage(condition);      
        break;
      
      case "Release Year":
        this.findMovieByReleaseYear(condition);      
        break;
      default:
        break;
    }

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

  findMovieByLanguage(language){
    this._movieService.findMovieByLanguage(language).subscribe(
      response => {
        this.movies = response['content'];      
      }
    )

    if(language == ""){
      this.getAllMovies();
    }
  }

  findMovieByReleaseYear(releaseYear){
    this._movieService.findMovieByReleaseYear(releaseYear).subscribe(
      response => {
        this.movies = response['content'];      
      }
    )

    if(releaseYear == ""){
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

  selectOption(option){
    this.selectedOption = option;    
    console.log(this.selectedOption);    
  }

}
