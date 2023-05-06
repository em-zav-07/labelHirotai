import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelGrid47x10v001Component } from './label-grid47x10v001.component';

describe('LabelGrid47x10v001Component', () => {
  let component: LabelGrid47x10v001Component;
  let fixture: ComponentFixture<LabelGrid47x10v001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelGrid47x10v001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelGrid47x10v001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
