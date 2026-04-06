import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly githubUrl    = 'https://github.com/FrancoHerreraIT';      
  readonly linkedinUrl  = 'https://www.linkedin.com/in/francoherreramoyano/';
  readonly emailAddress = 'francoherreramoyano@gmail.com';                  


  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
