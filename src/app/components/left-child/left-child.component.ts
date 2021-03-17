import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { LineStyle, CategoryBaseUnit } from '@progress/kendo-angular-charts';


@Component({
  selector: 'app-left-child',
  templateUrl: './left-child.component.html',
  styleUrls: ['./left-child.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeftChildComponent implements OnInit {

  public tripType: string;
  public customerName = new FormControl();
  public selectDate = new FormControl('all time');
  public week = {
    start: '2020-07-8',
    end: '2020-07-14'
  }
  public nextWeek = {
    start: '2020-07-15',
    end: '2020-07-21'
  }
  public weekCategories = ['Mon,8 jul', 'Tue,9 jul', 'Wed,10 jul', 'Thu,11 jul', 'Fri,12 jul', 'Sat,13 jul', 'Sun,14 jul'];
  public nextCategories = ['Mon,15 jul', 'Tue,16 jul', 'Wed,17 jul', 'Thu,18 jul', 'Fri,19 jul', 'Sat,20 jul', 'Sun,21 jul']
  public categories = [];
  public customers: string[] = [
    'Mary',
    'Shelley',
    'Igor'
  ];
  public filteredNames: Observable<string[]>;
  public info = [{
    text: 'Import',
    bgcolor: '#dc3545'
  }, {
    text: 'Export',
    bgcolor: '#007bff'

  }, {
    text: 'One-way',
    bgcolor: '#ffc107'
  }];
  public graphInfo = [];
  public style: LineStyle = "smooth";
  public baseUnit: CategoryBaseUnit = "days";
  public data: any[] = [[new Date(2000, 0, 1), 1], [new Date(2001, 0, 1), 1]];


  constructor() { }

  ngOnInit() {
    this.filteredNames = this.customerName.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.categories = this.categories.concat(this.weekCategories)
    this.graphInfo = this.graphInfo.concat(this.info);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.customers.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  choiceTrip(evt):void {
    this.graphInfo = [];
    if (evt.value === 'one_way') {
      this.graphInfo.push(this.info[2]);
      return;
    }
    this.graphInfo = this.graphInfo.concat(this.info);
  }

  selectTime(evt):void {
    this.categories = [];
    switch (evt.value) {
      case "now":
        this.categories = this.categories.concat(this.weekCategories);
        break;
      case "next":
        this.categories = this.categories.concat(this.nextCategories);
        break;
      default:
        this.categories = this.categories.concat(this.weekCategories);
    }
  }

}
