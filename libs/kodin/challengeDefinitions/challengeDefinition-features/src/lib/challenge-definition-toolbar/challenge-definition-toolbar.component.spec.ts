import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDefinitionToolbarComponent } from './challenge-definition-toolbar.component';

describe('ChallengeDefinitionToolbarComponent', () => {
  let component: ChallengeDefinitionToolbarComponent;
  let fixture: ComponentFixture<ChallengeDefinitionToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeDefinitionToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeDefinitionToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
