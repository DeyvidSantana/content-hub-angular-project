import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountGuard } from './guards/account.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'movies', loadChildren: './movie/movie.module#MovieModule', canActivate: [AccountGuard] },
  { path: 'tvs', loadChildren: './serie/serie.module#SerieModule', canActivate: [AccountGuard] },
  { path: 'people', loadChildren: './people/people.module#PeopleModule', canActivate: [AccountGuard] },  
  { path: '', pathMatch: 'full', redirectTo: 'movies', canActivate: [AccountGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
