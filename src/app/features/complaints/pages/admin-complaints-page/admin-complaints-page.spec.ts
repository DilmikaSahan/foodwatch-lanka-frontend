import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplaintsPage } from './admin-complaints-page';

describe('AdminComplaintsPage', () => {
  let component: AdminComplaintsPage;
  let fixture: ComponentFixture<AdminComplaintsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComplaintsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
