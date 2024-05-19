import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeEditorItemComponent } from './source-code-editor-item.component';

describe('SourceCodeEditorItemComponent', () => {
  let component: SourceCodeEditorItemComponent;
  let fixture: ComponentFixture<SourceCodeEditorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceCodeEditorItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceCodeEditorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
