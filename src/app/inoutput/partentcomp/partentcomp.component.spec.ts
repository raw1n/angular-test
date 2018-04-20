import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartentcompComponent } from './partentcomp.component';

describe('PartentcompComponent', () => {
  let component: PartentcompComponent;
  let fixture: ComponentFixture<PartentcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartentcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
