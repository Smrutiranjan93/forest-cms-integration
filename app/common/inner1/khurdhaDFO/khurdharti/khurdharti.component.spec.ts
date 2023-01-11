import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhurdhartiComponent } from './khurdharti.component';

describe('KhurdhartiComponent', () => {
  let component: KhurdhartiComponent;
  let fixture: ComponentFixture<KhurdhartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhurdhartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhurdhartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
