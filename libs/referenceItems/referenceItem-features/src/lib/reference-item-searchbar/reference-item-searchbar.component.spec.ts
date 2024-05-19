import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceItemSearchbarComponent } from './reference-item-searchbar.component';

describe('ReferenceItemSearchbarComponent', () => {
  let component: ReferenceItemSearchbarComponent;
  let fixture: ComponentFixture<ReferenceItemSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceItemSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceItemSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
