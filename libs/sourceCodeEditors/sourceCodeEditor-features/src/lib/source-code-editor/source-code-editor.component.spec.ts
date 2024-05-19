import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeEditorComponent } from './source-code-editor.component';

describe('SourceCodeEditorComponent', () => {
  let component: SourceCodeEditorComponent;
  let fixture: ComponentFixture<SourceCodeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceCodeEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
