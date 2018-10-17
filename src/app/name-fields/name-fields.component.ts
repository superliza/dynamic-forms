import { Component, OnInit } from '@angular/core';
import { faSave, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-name-fields',
  templateUrl: './name-fields.component.html',
  styleUrls: ['./name-fields.component.css']
})
export class NameFieldsComponent implements OnInit {

  faSave = faSave;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
