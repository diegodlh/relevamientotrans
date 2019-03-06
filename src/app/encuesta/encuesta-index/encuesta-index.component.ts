import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormioResourceIndexComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-encuesta-index',
  templateUrl: './encuesta-index.component.html',
  styleUrls: ['./encuesta-index.component.scss'],
})
export class EncuestaIndexComponent extends FormioResourceIndexComponent implements OnInit {
	refreshQuery = new EventEmitter()
	
	onInput(event) {
		if (event.target.value) {
			this.refreshQuery.emit({
				'data.numencuesta': event.target.value,
				// 'limit': 1000
			});
		} else {
			this.refreshQuery.emit({})
		}
	}

	gridQuery = {
		// 'limit': 1000
	}
}
