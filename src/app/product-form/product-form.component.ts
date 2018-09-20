import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Product } from './product';
import { MatDialog } from '@angular/material';
import { ColorDialogComponent } from './color-dialog.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  availableColors: string[] = ['red', 'green', 'blue', 'violet'];
  productForm: FormGroup;
  product: Product;

   get formArray(): FormArray {
     return (<FormArray>this.productForm.get('sizes'));
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      sizes: this.fb.array([this.buildColor()])
    });
  }

  buildColor(): FormGroup {
    return this.fb.group({
      colorName: 'red',
      sizeS: '',
      sizeM: '',
      sizeL: '',
      sizeXL: '',
      size2XL: '',
      size3XL: ''
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

  openDialog(index): void {
    const dialogRef = this.dialog.open(ColorDialogComponent, {
      width: '500px',
      data: {index, colors: this.availableColors}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const x = this.formArray.at(result.index);
        x.patchValue({
          colorName: result.color
         });
      }
    });
  }

}
