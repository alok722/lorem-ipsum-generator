import { Component } from '@angular/core';
import paragraphs from '../utils/lorem';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraph: string = '';
  limit: number = 1;

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  handleSliderChange(newLimit: number) {
    this.limit = newLimit;
  }

  generatePara() {
    this.paragraph = paragraphs.slice(0, this.limit).join("\n\n");
  }

  copyParagraph() {
    this.clipboard.copy(this.paragraph);
    this._snackBar.open('Text Copied', '❌', {
      duration: 3000,
    });
  }
}
