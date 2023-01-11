import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsSbListComponent } from './ofs-sb-list.component';

describe('OfsSbListComponent', () => {
  let component: OfsSbListComponent;
  let fixture: ComponentFixture<OfsSbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfsSbListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfsSbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
