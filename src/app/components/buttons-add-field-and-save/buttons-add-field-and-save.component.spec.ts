import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAddFieldAndSaveComponent } from './buttons-add-field-and-save.component';

describe('ButtonsAddFieldAndSaveComponent', () => {
  let component: ButtonsAddFieldAndSaveComponent;
  let fixture: ComponentFixture<ButtonsAddFieldAndSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsAddFieldAndSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAddFieldAndSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
