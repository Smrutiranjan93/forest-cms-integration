import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhadrakreportsComponent } from './bhadrakreports.component';

describe('BhadrakreportsComponent', () => {
  let component: BhadrakreportsComponent;
  let fixture: ComponentFixture<BhadrakreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhadrakreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhadrakreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
