import { Component, OnInit } from '@angular/core';
import { FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-encuesta-resource',
  templateUrl: './encuesta-resource.component.html',
  styleUrls: ['./encuesta-resource.component.scss']
})
export class EncuestaResourceComponent extends FormioResourceComponent implements OnInit {}
