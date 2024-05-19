import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceItemSearchlistComponent } from './reference-item-searchlist.component';

describe('ReferenceItemSearchlistComponent', () => {
  let component: ReferenceItemSearchlistComponent;
  let fixture: ComponentFixture<ReferenceItemSearchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceItemSearchlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceItemSearchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
