import { Person } from './../../models/person';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,    
    private _movieService: PeopleService,
    private location: Location) { }

  idPerson;
  person = {};
  personUpdated: Person;

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.idPerson = id;

      this._movieService.getById(id)
        .subscribe(response => {
          this.person = response;                             
        })
    });

    this.personUpdated = new Person({
      name: "",
      height: 0,
      hometown: "",
	    homeCountry: "",
      gender: 0
    });

  }

  public onFormSubmit(person){
    
    let saveConfirm = confirm("Do you really want to save changes of this person?");

    if(saveConfirm){
      this.buildUpdatedPerson(person);    
      
      this._movieService.updatePerson(this.idPerson, this.personUpdated)
          .subscribe(response => { 
            alert("Person updated successfully.");
            this.location.back();          
      })
    }    
    
  }

  buildUpdatedPerson(person){

    this.personUpdated.name = person.form.controls.name.value,
    this.personUpdated.height = person.form.controls.height.value,
    this.personUpdated.hometown = person.form.controls.hometown.value,
    this.personUpdated.homeCountry = person.form.controls.homeCountry.value
    this.personUpdated.gender = person.form.controls.gender.value	    
    
  }

}
