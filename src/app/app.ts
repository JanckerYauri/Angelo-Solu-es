import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./components/contact/contact";
import { AboutUsComponent } from "./components/about-us/about-us";
import { ServicesComponent } from "./components/services/services";
import { HeroSectionComponent } from "./components/hero-section/hero-section";
import { HeaderComponent } from "./components/header/header";
import { ReviewsSection } from "./components/reviews-section/reviews-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, AboutUsComponent, ServicesComponent, HeroSectionComponent, HeaderComponent, ReviewsSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projetoAngel');
}
