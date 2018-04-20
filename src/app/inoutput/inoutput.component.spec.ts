import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutputComponent } from './inoutput.component';

describe('InoutputComponent', () => {
  let component: InoutputComponent;
  let fixture: ComponentFixture<InoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
