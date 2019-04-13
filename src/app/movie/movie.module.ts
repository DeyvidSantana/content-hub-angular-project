import { AppRoutingModule } from './../app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie.routing.module';
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  providers:[
    MovieService
  ],
  exports: []
})
export class MovieModule { }
