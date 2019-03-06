import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceComponent,
  FormioResourceConfig,
  FormioResourceService,
  FormioResourceViewComponent,
  // FormioResourceIndexComponent,
  // FormioResourceCreateComponent,
  FormioResourceEditComponent,
  FormioResourceDeleteComponent
} from 'angular-formio/resource';
// import { EncuestaViewComponent } from './encuesta-view/encuesta-view.component';
// import { EncuestaResourceComponent } from './encuesta-resource/encuesta-resource.component';
import { EncuestaIndexComponent } from './encuesta-index/encuesta-index.component'
import { EncuestaCreateComponent } from './encuesta-create/encuesta-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild([
      {
        path: '',
        component: EncuestaIndexComponent
        // component: FormioResourceIndexComponent
      },
      {
        path: 'new',
        // component: FormioResourceCreateComponent
        component: EncuestaCreateComponent
      },
      {
        path: ':id',
        component: FormioResourceComponent,
        // component: EncuestaResourceComponent,
        children: [
          {
            path: '',
            redirectTo: 'view',
            pathMatch: 'full'
          },
          {
            path: 'view',
            component: FormioResourceViewComponent
            // component: EncuestaViewComponent
          },
          {
            path: 'edit',
            component: FormioResourceEditComponent
          },
          {
            path: 'delete',
            component: FormioResourceDeleteComponent
          }//,
          // {
          //   path: 'participant',
          //   loadChildren: './participant/participant.module#ParticipantModule'
          // }
        ]
      }
    ])
  ],
  declarations: [
    // EncuestaViewComponent,
    // EncuestaResourceComponent,
    EncuestaIndexComponent,
    EncuestaCreateComponent
  ],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'encuesta',
        form: 'encuesta'
      }
    }
  ]
})
export class EncuestaModule { }
