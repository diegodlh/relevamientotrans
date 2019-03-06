import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaIndexComponent } from './encuesta-index.component';

describe('EncuestaIndexComponent', () => {
  let component: EncuestaIndexComponent;
  let fixture: ComponentFixture<EncuestaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
