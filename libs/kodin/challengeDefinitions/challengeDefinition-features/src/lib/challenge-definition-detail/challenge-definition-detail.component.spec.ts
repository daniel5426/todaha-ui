import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDefinitionDetailComponent } from './challenge-definition-detail.component';

describe('ChallengeDefinitionDetailComponent', () => {
  let component: ChallengeDefinitionDetailComponent;
  let fixture: ComponentFixture<ChallengeDefinitionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeDefinitionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeDefinitionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
