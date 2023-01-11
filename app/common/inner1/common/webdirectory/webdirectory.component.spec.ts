import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdirectoryComponent } from './webdirectory.component';

describe('WebdirectoryComponent', () => {
  let component: WebdirectoryComponent;
  let fixture: ComponentFixture<WebdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
