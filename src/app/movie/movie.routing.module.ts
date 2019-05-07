import { EditComponent } from './../edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
    {  path: '', component: MovieComponent },
    {  path: ':id', component: MovieDetailComponent },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
