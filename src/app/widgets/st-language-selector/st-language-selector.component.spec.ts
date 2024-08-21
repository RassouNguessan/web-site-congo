import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StLanguageSelectorComponent } from './st-language-selector.component';

describe('StLanguageSelectorComponent', () => {
  let component: StLanguageSelectorComponent;
  let fixture: ComponentFixture<StLanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StLanguageSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
