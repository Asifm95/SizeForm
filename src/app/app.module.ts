import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MaterialModule } from './shared/material.module';
import { ColorDialogComponent } from './product-form/color-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ColorDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  entryComponents: [ColorDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
