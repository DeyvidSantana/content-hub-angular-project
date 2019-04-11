import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieComponent } from './serie/serie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'filmes', component: MovieComponent,
    children: [
      {
        path: 'detalhe/:id',
        component: MovieComponent
      }
    ]
  },
  {
    path: 'filmes/detalhes/:id', component: MovieDetailComponent
  },
  {
    path: 'series', component: SerieComponent
  },
  {
    path: 'series/detalhes/:id', component: SerieDetailComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'filmes' },
  { path: '**', redirectTo: 'filmes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
