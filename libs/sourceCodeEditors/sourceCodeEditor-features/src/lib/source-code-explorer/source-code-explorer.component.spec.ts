import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeExplorerComponent } from './source-code-explorer.component';

describe('SourceCodeExplorerComponent', () => {
  let component: SourceCodeExplorerComponent;
  let fixture: ComponentFixture<SourceCodeExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceCodeExplorerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceCodeExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
