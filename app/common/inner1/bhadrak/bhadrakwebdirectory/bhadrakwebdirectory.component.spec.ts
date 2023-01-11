import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhadrakwebdirectoryComponent } from './bhadrakwebdirectory.component';

describe('BhadrakwebdirectoryComponent', () => {
  let component: BhadrakwebdirectoryComponent;
  let fixture: ComponentFixture<BhadrakwebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhadrakwebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhadrakwebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
