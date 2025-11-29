import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintsPage } from './user-complaints-page';

describe('UserComplaintsPage', () => {
  let component: UserComplaintsPage;
  let fixture: ComponentFixture<UserComplaintsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComplaintsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
