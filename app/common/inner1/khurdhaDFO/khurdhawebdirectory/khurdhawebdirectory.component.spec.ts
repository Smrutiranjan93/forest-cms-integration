import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhurdhawebdirectoryComponent } from './khurdhawebdirectory.component';

describe('KhurdhawebdirectoryComponent', () => {
  let component: KhurdhawebdirectoryComponent;
  let fixture: ComponentFixture<KhurdhawebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhurdhawebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhurdhawebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
