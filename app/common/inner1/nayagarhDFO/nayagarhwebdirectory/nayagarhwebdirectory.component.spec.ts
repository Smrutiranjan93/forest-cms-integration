import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayagarhwebdirectoryComponent } from './nayagarhwebdirectory.component';

describe('NayagarhwebdirectoryComponent', () => {
  let component: NayagarhwebdirectoryComponent;
  let fixture: ComponentFixture<NayagarhwebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NayagarhwebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NayagarhwebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
