import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsJbListComponent } from './ofs-jb-list.component';

describe('OfsJbListComponent', () => {
  let component: OfsJbListComponent;
  let fixture: ComponentFixture<OfsJbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfsJbListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfsJbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
