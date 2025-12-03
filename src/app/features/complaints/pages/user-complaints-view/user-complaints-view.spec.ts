import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintsView } from './user-complaints-view';

describe('UserComplaintsView', () => {
  let component: UserComplaintsView;
  let fixture: ComponentFixture<UserComplaintsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComplaintsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplaintsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
