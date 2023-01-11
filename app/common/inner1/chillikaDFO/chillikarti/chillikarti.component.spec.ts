import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillikartiComponent } from './chillikarti.component';

describe('ChillikartiComponent', () => {
  let component: ChillikartiComponent;
  let fixture: ComponentFixture<ChillikartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChillikartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillikartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
