import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockavailbilityComponent } from './stockavailbility.component';

describe('StockavailbilityComponent', () => {
  let component: StockavailbilityComponent;
  let fixture: ComponentFixture<StockavailbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockavailbilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockavailbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
