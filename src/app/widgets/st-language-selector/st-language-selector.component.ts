import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-st-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './st-language-selector.component.html',
  styleUrl: './st-language-selector.component.css'
})
export class StLanguageSelectorComponent implements OnInit {
  selectedLanguage: string = 'FR';
  selectedFlag: string = 'assets/image/france.png';

  constructor() { }

  ngOnInit(): void {
    this.selectLanguage('fr');
  }

  selectLanguage(language: string) {
    switch (language) {
      case 'fr':
        this.selectedLanguage = 'FR';
        this.selectedFlag = 'assets/image/france.png';
        break;
      /*case 'en':
        this.selectedLanguage = 'English';
        this.selectedFlag = 'assets/flags/en.png';
        break;
      case 'es':
        this.selectedLanguage = 'Español';
        this.selectedFlag = 'assets/flags/es.png';
        break;
       */
      default:
        this.selectedLanguage = 'FR';
        this.selectedFlag = 'assets/image/france.png';
    }
  }
}
