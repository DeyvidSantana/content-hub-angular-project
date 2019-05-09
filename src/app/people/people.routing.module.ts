import { PersonEditComponent } from './person-edit/person-edit.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleComponent } from './people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {  path: '', component: PeopleComponent },
    {  path: ':id', component: PeopleDetailComponent },
    {  path: 'edit/:id', component: PersonEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleRoutingModule { }