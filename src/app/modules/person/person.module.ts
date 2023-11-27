import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonPageComponent } from './pages/person-page/person-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonPageComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
