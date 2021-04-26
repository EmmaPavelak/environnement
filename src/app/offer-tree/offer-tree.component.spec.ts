import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTreeComponent } from './offer-tree.component';

describe('OfferTreeComponent', () => {
  let component: OfferTreeComponent;
  let fixture: ComponentFixture<OfferTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
