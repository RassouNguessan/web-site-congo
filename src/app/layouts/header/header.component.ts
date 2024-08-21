import {Component, HostListener} from '@angular/core';
import {CommonModule} from "@angular/common";
import {StLanguageSelectorComponent} from "../../widgets/st-language-selector/st-language-selector.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, StLanguageSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Changer 50 selon votre position de défilement souhaitée
  }
}
