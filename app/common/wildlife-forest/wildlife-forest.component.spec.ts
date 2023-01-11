import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeForestComponent } from './wildlife-forest.component';

describe('WildlifeForestComponent', () => {
  let component: WildlifeForestComponent;
  let fixture: ComponentFixture<WildlifeForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildlifeForestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildlifeForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
