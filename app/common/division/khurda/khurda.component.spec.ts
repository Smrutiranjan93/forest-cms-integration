import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhurdaComponent } from './khurda.component';

describe('KhurdaComponent', () => {
  let component: KhurdaComponent;
  let fixture: ComponentFixture<KhurdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhurdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhurdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
