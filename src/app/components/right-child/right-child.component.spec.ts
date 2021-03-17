import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightChildComponent } from './right-child.component';

describe('RightChildComponent', () => {
  let component: RightChildComponent;
  let fixture: ComponentFixture<RightChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
