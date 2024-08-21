import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StSwiperCardComponent } from './st-swiper-card.component';

describe('StSwiperCardComponent', () => {
  let component: StSwiperCardComponent;
  let fixture: ComponentFixture<StSwiperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StSwiperCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StSwiperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
