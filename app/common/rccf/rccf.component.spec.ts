import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RccfComponent } from './rccf.component';

describe('RccfComponent', () => {
  let component: RccfComponent;
  let fixture: ComponentFixture<RccfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RccfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RccfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
