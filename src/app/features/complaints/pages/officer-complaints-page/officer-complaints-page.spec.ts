import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerComplaintsPage } from './officer-complaints-page';

describe('OfficerComplaintsPage', () => {
  let component: OfficerComplaintsPage;
  let fixture: ComponentFixture<OfficerComplaintsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficerComplaintsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
