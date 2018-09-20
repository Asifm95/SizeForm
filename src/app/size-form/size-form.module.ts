import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';

import { SizeFormComponent } from './size-form.component';
import { ColorDialogComponent } from './color-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  declarations: [
    SizeFormComponent,
    ColorDialogComponent
  ],
  exports: [
    SizeFormComponent,
    ColorDialogComponent
  ]
})
export class SizeFormModule { }
