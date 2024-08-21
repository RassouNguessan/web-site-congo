import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-st-swiper-card',
  standalone: true,
  imports: [],
  templateUrl: './st-swiper-card.component.html',
  styleUrl: './st-swiper-card.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class StSwiperCardComponent implements OnInit {
  propertyValue!: string;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.propertyValue = '1';
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.propertyValue = '2';
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.propertyValue = '2';
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.propertyValue = '3';
        } else if (result.breakpoints[Breakpoints.XLarge]) {
          this.propertyValue = '4';
        }
      }
    });
  }
}
