import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandakaComponent } from './chandaka.component';

describe('ChandakaComponent', () => {
  let component: ChandakaComponent;
  let fixture: ComponentFixture<ChandakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandakaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChandakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
