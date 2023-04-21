import { Component } from '@angular/core';
import { menubar } from '../styles';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  styles=menubar
  constructor(public dialog: MatDialog) {}
  openform():void {
    this.dialog.open(FormComponent)
    
  }

}

