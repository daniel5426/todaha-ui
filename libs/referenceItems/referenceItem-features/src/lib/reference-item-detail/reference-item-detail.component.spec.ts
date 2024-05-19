import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceItemDetailComponent } from './reference-item-detail.component';

describe('ReferenceItemDetailComponent', () => {
  let component: ReferenceItemDetailComponent;
  let fixture: ComponentFixture<ReferenceItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceItemDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
