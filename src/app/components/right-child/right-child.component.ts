import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { BookingSuccessDialogComponent } from '../booking-success-dialog/booking-success-dialog.component';

@Component({
  selector: 'app-right-child',
  templateUrl: './right-child.component.html',
  styleUrls: ['./right-child.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RightChildComponent implements OnInit {

  public CKE_CONFIG: any = {
    uiColor: '#f0f0f0',
    allowedContent: true,
    extraPlugins: 'autogrow,divarea',
    UI_BUTTON: 'button',
    toolbarGroups: [
      { name: 'basicstyles', groups: ['basicstyles'] },
      { name: 'paragraph', groups: ['align', 'list', 'paragraph',] },
      '/',
    ],
    removeButtons: 'Strikethrough,Subscript, Anchor'
  };

  public boxBody = null;
  public box_checked = false;

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  changeStatus(evt): void {
    if (!evt.checked || this.boxBody === null) {
      return;
    }
    const successDialogRef = this.dialog.open(BookingSuccessDialogComponent, {
      width: '331px',
      panelClass: 'success-pane',
    });
    successDialogRef.afterClosed().subscribe(result => {
    });
  }

}
