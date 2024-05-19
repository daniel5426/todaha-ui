import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDefinitionListComponent } from './challenge-definition-list.component';

describe('ChallengeDefinitionListComponent', () => {
  let component: ChallengeDefinitionListComponent;
  let fixture: ComponentFixture<ChallengeDefinitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeDefinitionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeDefinitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
