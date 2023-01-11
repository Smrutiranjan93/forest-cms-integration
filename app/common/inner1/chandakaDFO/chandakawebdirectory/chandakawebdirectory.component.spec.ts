import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandakawebdirectoryComponent } from './chandakawebdirectory.component';

describe('ChandakawebdirectoryComponent', () => {
  let component: ChandakawebdirectoryComponent;
  let fixture: ComponentFixture<ChandakawebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandakawebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChandakawebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
