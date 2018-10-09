import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { NameFieldsComponent } from './name-fields/name-fields.component';
import { FieldsComponent } from './fields/fields.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    NameFieldsComponent,
    FieldsComponent,
    RulesComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
