// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

// components
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { NameFieldsComponent } from './components/name-fields/name-fields.component';
import { FieldsComponent } from './components/fields/fields.component';
import { RulesComponent } from './components/rules/rules.component';

// services
import { FieldsService } from './services/fields.service';
import { ButtonsAddFieldAndSaveComponent } from './components/buttons-add-field-and-save/buttons-add-field-and-save.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    NameFieldsComponent,
    FieldsComponent,
    RulesComponent,
    ButtonsAddFieldAndSaveComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'No hay resultados'
      }
    },
    FieldsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
