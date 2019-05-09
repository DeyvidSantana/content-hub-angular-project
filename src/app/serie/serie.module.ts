import { FormsModule } from '@angular/forms';
import { SerieEditComponent } from './serie-edit/serie-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie.routing.module';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieService } from './serie.service';

@NgModule({
  declarations: [
    SerieComponent,
    SerieDetailComponent,
    SerieEditComponent
  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    FormsModule
  ],
  providers: [
    SerieService
  ]
})
export class SerieModule { }
