import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileDomainComponent } from './userProfile-domain.component';

describe('UserProfileDomainComponent', () => {
  let component: UserProfileDomainComponent;
  let fixture: ComponentFixture<UserProfileDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
