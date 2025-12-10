import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllUsers } from './admin-view-all-users';

describe('AdminViewAllUsers', () => {
  let component: AdminViewAllUsers;
  let fixture: ComponentFixture<AdminViewAllUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewAllUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewAllUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
