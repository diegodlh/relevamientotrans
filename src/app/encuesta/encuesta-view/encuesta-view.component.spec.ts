import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaViewComponent } from './encuesta-view.component';

describe('EncuestaViewComponent', () => {
  let component: EncuestaViewComponent;
  let fixture: ComponentFixture<EncuestaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
