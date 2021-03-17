import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftChildComponent } from './left-child.component';

describe('LeftChildComponent', () => {
  let component: LeftChildComponent;
  let fixture: ComponentFixture<LeftChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
