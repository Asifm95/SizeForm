import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SizeFormModule } from './size-form/size-form.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { ColorDialogComponent } from './size-form/color-dialog.component';
import { SizeFormComponent } from './size-form/size-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeFormComponent,
    ColorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [ColorDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
