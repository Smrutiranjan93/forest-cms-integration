import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitywebdirectoryComponent } from './citywebdirectory.component';

describe('CitywebdirectoryComponent', () => {
  let component: CitywebdirectoryComponent;
  let fixture: ComponentFixture<CitywebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitywebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitywebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
