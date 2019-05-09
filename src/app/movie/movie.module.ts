import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { AppRoutingModule } from './../app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie.routing.module';
import { MovieService } from './movie.service';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent,
    MovieEditComponent  
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule
  ],
  providers:[
    MovieService
  ],
  exports: []
})
export class MovieModule { }
