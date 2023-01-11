import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandakartiComponent } from './chandakarti.component';

describe('ChandakartiComponent', () => {
  let component: ChandakartiComponent;
  let fixture: ComponentFixture<ChandakartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandakartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChandakartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
