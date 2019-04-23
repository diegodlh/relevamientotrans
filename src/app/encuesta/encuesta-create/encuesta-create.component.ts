import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService,
	       FormioResourceConfig,
	       FormioResourceCreateComponent } from 'angular-formio/resource';
import { FormioAuthService } from 'angular-formio/auth'

@Component({
  selector: 'app-encuesta-create',
  templateUrl: './encuesta-create.component.html',
  styleUrls: ['./encuesta-create.component.scss'],
})
export class EncuestaCreateComponent extends FormioResourceCreateComponent implements OnInit {
	constructor(
		service: FormioResourceService, 
		route: ActivatedRoute, 
		router: Router, 
		config: FormioResourceConfig,
		public auth: FormioAuthService
	) {
		super(service, route, router, config);
		// this.service.resource = {"data": {"cargadorx": auth.user.data.nombre}};
	}
	onSubmit = function (submission) {
        var _this = this;
        this.service
            .save(submission)
            .then(function () {
            _this.router.navigate(['../'], {
                relativeTo: _this.route
            });
        })
            .catch(function (err) { return _this.onError.emit(err); });
    };
}