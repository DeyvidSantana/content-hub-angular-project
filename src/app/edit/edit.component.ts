import { map } from 'rxjs/operators';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { AccountService } from './../services/account.service';
import { FormBuilder } from '@angular/forms';
import { SerieService } from './../serie/serie.service';
import { MovieService } from './../movie/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  movieOrSerie: any = {}
  type: string = "";

  editForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService, private _serieService: SerieService,
    private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      original_title: ['', Validators.required],
      title: ['', Validators.required],
      original_language: ['', Validators.required],
      popularity: ['', Validators.required],
      overview: ['', Validators.required] 
    }); 

    // Idioma, popularidade e sinopse estão duplicados em relação aos serviços de filme e serie
    // Ainda não consegui um jeito de tirar esta duplicação (movieOrSerie só é preenchido neste lugar)
    this._activatedRoute.params.subscribe(params => {
        let id = params['id'];
        this.type = params['type'];
        
        if(this.type == 'movie'){
          this._movieService.getById(id)
                .subscribe(response => {                 
                this.movieOrSerie = response;                            
                this.editForm.controls["original_title"].setValue(this.movieOrSerie.original_title);
                this.editForm.controls["title"].setValue(this.movieOrSerie.title);                
                this.editForm.controls["original_language"].setValue(this.movieOrSerie.original_language);
                this.editForm.controls["popularity"].setValue(this.movieOrSerie.popularity);
                this.editForm.controls["overview"].setValue(this.movieOrSerie.overview);
          })        
          
        } else {
          this._serieService.getById(id)
                .subscribe(response => {                
                this.movieOrSerie = response;    
                this.editForm.controls["original_title"].setValue(this.movieOrSerie.original_name);
                this.editForm.controls["title"].setValue(this.movieOrSerie.name);         
                this.editForm.controls["original_language"].setValue(this.movieOrSerie.original_language);
                this.editForm.controls["popularity"].setValue(this.movieOrSerie.popularity);
                this.editForm.controls["overview"].setValue(this.movieOrSerie.overview);
          })            
        }                        
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';
      
  }
}
