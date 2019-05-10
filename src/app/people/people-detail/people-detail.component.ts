import { PeopleService } from './../people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _peopleService: PeopleService,
    private location: Location) { }

  person = {};

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._peopleService.getById(id)
        .subscribe(response => {
          this.person = response;                    
        })
    });
  }

  deletePerson(idPerson){  
    
    let deleteConfirm = confirm("Do you really want to delete this person?");

    if(deleteConfirm){
      this._peopleService.deletePerson(idPerson)
        .subscribe(response => {
          alert("Person deleted successfully.");  
          this.location.back();               
      })
    }
  }

}
