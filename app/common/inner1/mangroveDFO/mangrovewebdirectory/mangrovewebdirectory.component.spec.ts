import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangrovewebdirectoryComponent } from './mangrovewebdirectory.component';

describe('MangrovewebdirectoryComponent', () => {
  let component: MangrovewebdirectoryComponent;
  let fixture: ComponentFixture<MangrovewebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangrovewebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangrovewebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
