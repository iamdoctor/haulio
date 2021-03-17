import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-success-dialog',
  templateUrl: './booking-success-dialog.component.html',
  styleUrls: ['./booking-success-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BookingSuccessDialogComponent implements OnInit {

  public dialogImgUrl = '';
  public rootImgUrl = '/assets/img/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public location: Location) { }

  public ngOnInit() {
    this.dialogImgUrl = location.origin + this.rootImgUrl + 'dialog.jpg';
  }
}

