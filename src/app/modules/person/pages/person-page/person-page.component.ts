import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {
  formCrearPersona: FormGroup = new FormGroup({});

  data: any = [];
  constructor(private _personService: PersonService) { }

  ngOnInit(): void {

    this.formCrearPersona = new FormGroup(
      {
        nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellidos: new FormControl('', [Validators.minLength(3), Validators.required]),
        tipoIdentificacion: new FormControl('', [Validators.required]),
        numeroIdentificacion: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),

      });

    this._personService.consultarTodasPersonas().subscribe((r: any) => {
      this.data = r;
    });
  }

  consultarTodasPersonas() {
    this._personService.consultarTodasPersonas().subscribe((r: any) => {
      this.data = r;
    });
  }


  crearPersona() {
    const { nombres, apellidos, numeroIdentificacion, tipoIdentificacion, email } = this.formCrearPersona.value;

    this._personService.crearPersona(nombres, apellidos, numeroIdentificacion, tipoIdentificacion, email).subscribe((r: any) => {
      console.log("res", r);
      this.consultarTodasPersonas();
      $("#crearPersonaModal").modal("hide");
      this.formCrearPersona.reset();
    });

  }

}
