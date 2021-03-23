import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologicalFootprintComponent } from './ecological-footprint.component';

describe('EcologicalFootprintComponent', () => {
  let component: EcologicalFootprintComponent;
  let fixture: ComponentFixture<EcologicalFootprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcologicalFootprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcologicalFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
