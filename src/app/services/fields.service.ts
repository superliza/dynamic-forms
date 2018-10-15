import { Injectable } from '@angular/core';
import { Field } from '../model/field';


@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  private fields: Field[] = [
    {
      'name': 'accepted'
    },
    {
      'name': 'after',
      'arguments': [
        'date'
      ]
    },
    {
      'name': 'after_or_equal',
      'arguments': [
        'date'
      ]
    },
    {
      'name': 'alpha',
      'arguments': [

      ]
    },
    {
      'name': 'alpha_dash',
      'arguments': [

      ]
    },
    {
      'name': 'alpha_num',
      'arguments': [

      ]
    },
    {
      'name': 'between',
      'arguments': [
        'min',
        'max'
      ]
    },
    {
      'name': 'unique',
      'arguments': [

      ]
    },
    {
      'name': 'email',
      'arguments': [

      ]
    },
    {
      'name': 'numeric',
      'arguments': [

      ]
    },
    {
      'name': 'min',
      'arguments': [
        'value'
      ]
    },
    {
      'name': 'in',
      'arguments': [
        'value'
      ]
    }
  ];

  constructor() {
    console.log('servicio listo');
  }

  getFields() {
    return this.fields;
  }
}
