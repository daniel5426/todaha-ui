import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeExplorerItemComponent } from './source-code-explorer-item.component';

describe('SourceCodeExplorerItemComponent', () => {
  let component: SourceCodeExplorerItemComponent;
  let fixture: ComponentFixture<SourceCodeExplorerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceCodeExplorerItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceCodeExplorerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
