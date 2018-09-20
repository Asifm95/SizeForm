import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-color-dialog',
  templateUrl: './color-dialog.component.html',
  styleUrls: ['./color-dialog.component.css']
})
export class ColorDialogComponent implements OnInit {

  colors: string[];
  selectedColor = '';
  constructor(
    public dialogRef: MatDialogRef<ColorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
     }

  ngOnInit() {
    console.log('datas', this.data);
    this.colors = this.data.colors;
    console.log(this.dialogRef);
  }

  onSelection(color: string, index: number) {
    this.selectedColor = color;
  }

  onSave() {
    this.dialogRef.close({index: this.data.index, color: this.selectedColor});
  }

}
