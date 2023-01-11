import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangrovereportsComponent } from './mangrovereports.component';

describe('MangrovereportsComponent', () => {
  let component: MangrovereportsComponent;
  let fixture: ComponentFixture<MangrovereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangrovereportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangrovereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
