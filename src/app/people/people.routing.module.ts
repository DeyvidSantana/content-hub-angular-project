import { PeopleComponent } from './people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {  path: '', component: PeopleComponent },
    //{  path: 'detalhes/:id', component: PeopleDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleRoutingModule { }