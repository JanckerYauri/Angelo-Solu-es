import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent {
  onSlide($event: Event) {
    throw new Error('Method not implemented.');
  }

}