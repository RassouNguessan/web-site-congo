import { Component } from '@angular/core';
import {CommonModule, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-st-call-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './st-call-support.component.html',
  styleUrl: './st-call-support.component.css'
})
export class StCallSupportComponent {

  isVisible: boolean = false

  onShowCall() {
    this.isVisible = !this.isVisible
  }

}
