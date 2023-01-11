import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhurdhareprtsComponent } from './khurdhareprts.component';

describe('KhurdhareprtsComponent', () => {
  let component: KhurdhareprtsComponent;
  let fixture: ComponentFixture<KhurdhareprtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhurdhareprtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhurdhareprtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
