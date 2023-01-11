import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillikawebdirectoryComponent } from './chillikawebdirectory.component';

describe('ChillikawebdirectoryComponent', () => {
  let component: ChillikawebdirectoryComponent;
  let fixture: ComponentFixture<ChillikawebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChillikawebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillikawebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
