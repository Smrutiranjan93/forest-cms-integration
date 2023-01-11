import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurirtiComponent } from './purirti.component';

describe('PurirtiComponent', () => {
  let component: PurirtiComponent;
  let fixture: ComponentFixture<PurirtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurirtiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurirtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
