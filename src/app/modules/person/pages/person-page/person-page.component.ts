import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

  data: any = [];
  constructor(private _personService: PersonService) { }

  ngOnInit(): void {

    this._personService.consultarTodasPersonas().subscribe((r: any) => {
      this.data = r;
    });
  }

}
