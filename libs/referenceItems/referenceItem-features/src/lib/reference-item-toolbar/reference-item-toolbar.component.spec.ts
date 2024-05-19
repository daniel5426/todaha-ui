import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceItemToolbarComponent } from './reference-item-toolbar.component';

describe('ReferenceItemToolbarComponent', () => {
  let component: ReferenceItemToolbarComponent;
  let fixture: ComponentFixture<ReferenceItemToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceItemToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceItemToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
