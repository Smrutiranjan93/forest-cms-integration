import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhadrakrtiComponent } from './bhadrakrti.component';

describe('BhadrakrtiComponent', () => {
  let component: BhadrakrtiComponent;
  let fixture: ComponentFixture<BhadrakrtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhadrakrtiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhadrakrtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
