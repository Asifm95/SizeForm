import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SizeFormModule } from './size-form/size-form.module';

import { AppComponent } from './app.component';
import { ColorDialogComponent } from './size-form/color-dialog.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    SizeFormModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [ColorDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
