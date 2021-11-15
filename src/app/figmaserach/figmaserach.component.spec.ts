import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaserachComponent } from './figmaserach.component';

describe('FigmaserachComponent', () => {
  let component: FigmaserachComponent;
  let fixture: ComponentFixture<FigmaserachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigmaserachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigmaserachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
