import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfoComponent } from './dfo.component';

describe('DfoComponent', () => {
  let component: DfoComponent;
  let fixture: ComponentFixture<DfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
