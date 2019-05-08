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
  searches = ["Name", "Language", "Release Year"];
  selectedOption: string = "Name";

  ngOnInit() {
    this.getAllTvs();
  }

  findTvs(condition){

    console.log(condition);
    

    switch(this.selectedOption){

      case "Name":
        this.findTvByTitle(condition);      
        break;

      case "Language":
        this.findTvByLanguage(condition);      
        break;
      
      case "Release Year":
        this.findTvByReleaseYear(condition);      
        break;
      default:
        break;
    }

  }

  findTvByTitle(title){  

    this._serieService.findTvByTitle(title).subscribe(
      response => {
        this.tvs = response['content'];      
      }
    )

    if(title == ""){
      this.getAllTvs();
    }
  }

  findTvByLanguage(language){
    this._serieService.findTvByLanguage(language).subscribe(
      response => {
        this.tvs = response['content'];      
      }
    )

    if(language == ""){
      this.getAllTvs();
    }
  }

  findTvByReleaseYear(releaseYear){
    this._serieService.findTvByReleaseYear(releaseYear).subscribe(
      response => {
        this.tvs = response['content'];      
      }
    )

    if(releaseYear == ""){
      this.getAllTvs();
    }
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
    this._router.navigate(['/tvs/', tv.id]);
  }

  selectOption(option){
    this.selectedOption = option;       
  }
  
}
