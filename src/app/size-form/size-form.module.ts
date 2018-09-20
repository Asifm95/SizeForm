import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { SizeFormComponent } from './size-form.component';
import { ColorDialogComponent } from './color-dialog.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    SizeFormComponent,
    ColorDialogComponent
  ]
})
export class SizeFormModule { }
