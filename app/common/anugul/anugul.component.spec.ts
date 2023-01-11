import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnugulComponent } from './anugul.component';

describe('AnugulComponent', () => {
  let component: AnugulComponent;
  let fixture: ComponentFixture<AnugulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnugulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnugulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
