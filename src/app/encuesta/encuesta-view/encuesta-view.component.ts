import { Component } from '@angular/core';
import { FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-encuesta-view',
  templateUrl: './encuesta-view.component.html',
  styleUrls: ['./encuesta-view.component.scss']
})
export class EncuestaViewComponent extends FormioResourceViewComponent {}
