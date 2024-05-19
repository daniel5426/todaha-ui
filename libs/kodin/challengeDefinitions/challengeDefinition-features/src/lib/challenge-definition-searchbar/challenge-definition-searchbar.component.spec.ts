import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDefinitionSearchbarComponent } from './challenge-definition-searchbar.component';

describe('ChallengeDefinitionSearchbarComponent', () => {
  let component: ChallengeDefinitionSearchbarComponent;
  let fixture: ComponentFixture<ChallengeDefinitionSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeDefinitionSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeDefinitionSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
