import { Component, OnInit } from '@angular/core';
import { faSave, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-buttons-add-field-and-save',
  templateUrl: './buttons-add-field-and-save.component.html',
  styleUrls: ['./buttons-add-field-and-save.component.css']
})
export class ButtonsAddFieldAndSaveComponent implements OnInit {

  faSave = faSave;
  faPlus = faPlus;

  constructor(
    private fieldService: FieldsService
  ) { }

  ngOnInit() {
  }

}
