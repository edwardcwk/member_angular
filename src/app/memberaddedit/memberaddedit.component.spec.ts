import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberaddeditComponent } from './memberaddedit.component';

describe('MemberaddeditComponent', () => {
  let component: MemberaddeditComponent;
  let fixture: ComponentFixture<MemberaddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberaddeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
