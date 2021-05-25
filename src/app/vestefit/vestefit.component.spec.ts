import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestefitComponent } from './vestefit.component';

describe('VestefitComponent', () => {
  let component: VestefitComponent;
  let fixture: ComponentFixture<VestefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
