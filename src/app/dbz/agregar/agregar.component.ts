import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzSerevice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzServices: DbzSerevice) {}
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzServices.agregarPersonaje(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
