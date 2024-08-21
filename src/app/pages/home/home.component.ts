import {Component} from '@angular/core';
import {StSwiperCardComponent} from "../../widgets/st-swiper-card/st-swiper-card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StSwiperCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

export default HomeComponent;
