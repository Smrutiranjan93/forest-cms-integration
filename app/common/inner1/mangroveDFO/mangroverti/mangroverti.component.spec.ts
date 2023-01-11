import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangrovertiComponent } from './mangroverti.component';

describe('MangrovertiComponent', () => {
  let component: MangrovertiComponent;
  let fixture: ComponentFixture<MangrovertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangrovertiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangrovertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
