import { SerieEditComponent } from './serie-edit/serie-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

const routes: Routes = [
    {  path: '', component: SerieComponent },
    {  path: ':id', component: SerieDetailComponent },
    {  path: 'edit/:id', component: SerieEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SerieRoutingModule { }