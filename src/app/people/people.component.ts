import { Router } from '@angular/router';
import { PeopleService } from './people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _peopleService: PeopleService,
    private _router: Router) { }

  people = [];

  ngOnInit() {
    this.getAllPeople();
  }

  getAllPeople(){
    this._peopleService.getDiscover().subscribe(
      response => {
        this.people = response['content'];
        console.log(this.people);
        
      }
    )
  }

  showDetails(person) {
    console.log(person.id);
    
    this._router.navigate(['/people/', person.id]);
  }

}
