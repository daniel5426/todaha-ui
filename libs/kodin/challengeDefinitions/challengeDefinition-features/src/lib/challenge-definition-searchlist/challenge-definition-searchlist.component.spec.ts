import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDefinitionSearchlistComponent } from './challenge-definition-searchlist.component';

describe('ChallengeDefinitionSearchlistComponent', () => {
  let component: ChallengeDefinitionSearchlistComponent;
  let fixture: ComponentFixture<ChallengeDefinitionSearchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeDefinitionSearchlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeDefinitionSearchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
