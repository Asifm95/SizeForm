import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ColorDialogComponent } from './color-dialog.component';

@Component({
  selector: 'app-size-form',
  templateUrl: './size-form.component.html',
  styleUrls: ['./size-form.component.css']
})
export class SizeFormComponent implements OnInit {

  sizeForm: FormGroup;
  // tslint:disable-next-line:no-input-rename
  @Input('colors') availableColors: string[];
  @Output() formData: EventEmitter<any> = new EventEmitter();

   get formArray(): FormArray {
     return (<FormArray>this.sizeForm.get('sizes'));
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  ngOnInit() {
    this.sizeForm = this.fb.group({
      sizes: this.fb.array([this.buildColor()])
    });
  }

  buildColor(): FormGroup {
    return this.fb.group({
      colorName: [this.availableColors[0]],
      sizeS: ['', Validators.pattern('^[0-9]*$')],
      sizeM: ['', Validators.pattern('^[0-9]*$')],
      sizeL: ['', Validators.pattern('^[0-9]*$')],
      sizeXL: ['', Validators.pattern('^[0-9]*$')],
      size2XL: ['', Validators.pattern('^[0-9]*$')],
      size3XL: ['', Validators.pattern('^[0-9]*$')]
    });
  }

  onAddColor() {
    this.formArray.push(this.buildColor());
  }

  onDeleteColor(i: number) {
    this.formArray.removeAt(i);
  }

  colorName(i: number): string {
    return this.formArray.controls[i].value.colorName;
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(ColorDialogComponent, {
      width: '500px',
      data: { index, colors: this.availableColors }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.color) {
        this.formArray.at(result.index).patchValue({
          colorName: result.color
        });
      }
    });
  }

    onSave() {
      if (this.sizeForm.valid) {
        this.formData.emit(this.sizeForm.value);
      }
  }

}
