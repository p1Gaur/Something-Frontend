import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincultureComponent } from './adminculture.component';

describe('AdmincultureComponent', () => {
  let component: AdmincultureComponent;
  let fixture: ComponentFixture<AdmincultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
