import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintsAdd } from './user-complaints-add';

describe('UserComplaintsAdd', () => {
  let component: UserComplaintsAdd;
  let fixture: ComponentFixture<UserComplaintsAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComplaintsAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplaintsAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
