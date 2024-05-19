import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutPageComponent } from './sign-out-page.component';

describe('SignOutPageComponent', () => {
  let component: SignOutPageComponent;
  let fixture: ComponentFixture<SignOutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignOutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
