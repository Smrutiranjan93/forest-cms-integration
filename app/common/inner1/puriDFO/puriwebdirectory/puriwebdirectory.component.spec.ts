import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuriwebdirectoryComponent } from './puriwebdirectory.component';

describe('PuriwebdirectoryComponent', () => {
  let component: PuriwebdirectoryComponent;
  let fixture: ComponentFixture<PuriwebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuriwebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuriwebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
