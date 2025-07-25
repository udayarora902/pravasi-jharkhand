import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSectionComponent {
  // Hero section is now just static content - no inputs needed
}
