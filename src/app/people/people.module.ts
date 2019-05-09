import { PersonEditComponent } from './person-edit/person-edit.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleService } from './people.service';
import { PeopleRoutingModule } from './people.routing.module';
import { PeopleComponent } from './people.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }