import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCallSupportComponent } from './st-call-support.component';

describe('StCallSupportComponent', () => {
  let component: StCallSupportComponent;
  let fixture: ComponentFixture<StCallSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCallSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCallSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
