import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilikaComponent } from './chilika.component';

describe('ChilikaComponent', () => {
  let component: ChilikaComponent;
  let fixture: ComponentFixture<ChilikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
