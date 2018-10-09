import { Component, OnInit } from '@angular/core';
import { faSave, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  faSave = faSave;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit() {
  }

}
